import React from 'react';
import { getLastFiveUsers } from '../../services/userService';
import Users from '../Users/Users';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const LastActiveUsers: React.FC = () => {
    const [users, setUsers] = React.useState<User[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getLastFiveUsers().then((response) => {
            setUsers(response)
            //setIsLoading(false);
        }).finally(() => setIsLoading(false))
    }, []);

    return (
        <>
        <Users items={users} isLoading={isLoading}/>
        </>
    );
};

export default LastActiveUsers;