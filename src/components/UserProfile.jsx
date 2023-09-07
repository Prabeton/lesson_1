import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import styles from './UserProfile.module.css';


function UserProfile() {
	const user = {
		imageUrl: 'https://i.imgur.com/MiFDSYU.jpeg',
		name: "Zelda Bernadetta Longinus",
		email: "zelda.bernadetta@longinus.com",
	};
	const user2 = {
		imageUrl: 'https://i.imgur.com/duPTbYB.jpeg',
		name: "Kirgina Red",
		email: "kirgina.red@diablo.hell",
	};
	
	return (
		<div className={styles.users}>
			<div className={styles.profile}>
				<ProfilePicture src={user.imageUrl} />
				<ProfileDetails name={user.name} email={user.email} />
			</div>
			<div className={styles.profile}>
				<ProfilePicture src={user2.imageUrl} />
				<ProfileDetails name={user2.name} email={user2.email} />
			</div>
		</div>
	);


}


export default UserProfile;

