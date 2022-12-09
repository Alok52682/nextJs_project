const Comments = ({ comments }) => {

    return (
        <div>
            <h3>Total number of comments: {comments.length}</h3>
            {
                comments.map(comment => <h2 key={comment.id} className='my-5'>{comment.body}</h2>)
            }
        </div>
    );
};

export default Comments;

export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
    const comments = await res.json();

    return { props: { comments } }
}