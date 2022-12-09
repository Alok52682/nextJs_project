import Post from "../../Components/Post/post";

const Posts = ({ posts }) => {
    return (
        <div>
            <h1 className="text-center text-3xl mt-5">Total number of posts: {posts.length}</h1>

            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }

        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    const posts = await res.json();

    return { props: { posts } }
}