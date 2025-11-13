import styles from './user-card.module.scss';


interface UserCardProps {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

const UserCard: React.FC<UserCardProps> = ({ firstName, lastName, email }) => {
    return (
        <li className={styles.card}>
            <div className={styles.avatar}>
                {firstName[0]}{lastName[0]}
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{firstName} {lastName}</div>
                <div className={styles.email}>{email}</div>
            </div>
        </li>
    );
};

export default UserCard;