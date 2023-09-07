import styles from './ProfileDetails.module.css';

const ProfileDetails = ( { name, email } ) => {
	return (
		<div className={styles.details}>
			<div className={styles.title}>{name}</div>
			<div className={styles.email}>{email}</div>
		</div>
	);
}
export default ProfileDetails;