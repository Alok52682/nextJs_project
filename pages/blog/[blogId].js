import { useRouter } from 'next/router';
const BlogId = () => {
    const router = useRouter();
    const id = router.query.blogId;
    return (
        <div>
            <h2>This is a dynamic page: {id}</h2>
        </div>
    );
};

export default BlogId;