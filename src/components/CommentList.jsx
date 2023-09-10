import Comment from './Comment';
import styles from './CommentList.module.css';

const CommentList = (props) => {
	const comments = props.comments;
	
	return (
		<div className={styles.commentList}>
			<h3>Liczba komentarzy: {comments.length}</h3>
			{comments.map((comment, index) => (
				<Comment key={index} username={comment.username} text={comment.text} />
			))}
		</div>
	);
}
export default CommentList;