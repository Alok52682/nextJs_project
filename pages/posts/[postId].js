import { useRouter } from 'next/router';
const PostDetails = ({ post }) => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/posts');
    }

    return (
        <div className="card m-10 bg-slate-600 text-primary-content">
            <div className="card-body">
                <p><small>{post.id}</small></p>
                <h2 className="card-title">{post?.title}</h2>
                <p>{post?.body}</p>
                <button onClick={handleBack} className="btn btn-outline btn-ghost">Back to post</button>
            </div>
        </div>
    );
};

export const getStaticProps = async (context) => {

    const { params } = context

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const post = await res.json();

    return { props: { post } }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export default PostDetails;