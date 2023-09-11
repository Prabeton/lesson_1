import { useState, useRef, useEffect } from 'react';
import styles from './Comment.module.css';

const Comment = ( props ) => {
	const [showReplyField, setShowReplyField] = useState(false);
	const [replyText, setReplyText] = useState('');
	const [replies, setReplies] = useState([]);
	const inputRef = useRef(null);
	
	const handleReplyClick = () => {
		setShowReplyField(true);
	};
	
	useEffect(() => {
		if (showReplyField && inputRef.current) {
		  inputRef.current.focus();
		}
	  }, [showReplyField]);
	
	const handleReplyChange = (event) => {
		setReplyText(event.target.value);
	};
	const handleReplySubmit = () => {
		if (replyText.trim() !== "") {
			const newReply = { 
				text: replyText,
			};
			setReplies([...replies, newReply]);
			setReplyText("");
			setShowReplyField(false);	
		}
	};
	
	return (
		<div className={`${styles.commentField} ${styles.indentation}`}>
			<div className={styles.username}>{props.username}</div>
			<div className={styles.text}>{props.text}</div>
			<button className={styles.reply} onClick={handleReplyClick}>Reply</button>
			{showReplyField && (
			<div>
				<input className={styles.replyField} ref={inputRef} type="text" placeholder="Treść odpowiedzi.." value={replyText} onChange={handleReplyChange} />
				<button className={styles.submit} onClick={handleReplySubmit}>Submit</button>
			</div>)}
		{replies.map((reply, index) => (
			<Comment key={index} username="User" text={reply.text} />
		))}
		</div>
	);
} 
export default Comment;