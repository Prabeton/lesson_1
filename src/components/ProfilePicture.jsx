import styles from './ProfilePicture.module.css';

function ProfilePicture ( { src } ) {
	return (
		<div>
			<img className={styles.img} src={src} alt="user's foto"/>
		</div>
	);
}
export default ProfilePicture;