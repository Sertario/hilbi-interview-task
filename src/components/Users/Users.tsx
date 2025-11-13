import UserCard from '../UserCard/UserCard'
import styles from './users.module.scss';
import Skeleton from '../Skeleton/Skeleton'
import Title from '../Title/Title'

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

interface UsersProps {
    items: User[];
    isLoading: boolean;
}

const Users: React.FC<UsersProps> = ({ items, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (<ul className={styles.userList}>
                <Title text="Last active users" buttonVisible={true}
                    onButtonClick={() => {console.log("Clicked")}} />
                {
                    items.map((obj) =>
                    (<UserCard key={obj.id} {...obj} />
                    ))}
            </ul>
            )}
        </>
    );
};

export default Users;