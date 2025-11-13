import React from 'react'
import StatsCard from '../StatsCard/StatsCard'
import styles from './stats-section.module.scss'
import { CloudOutlined, BulbOutlined, PoweroffOutlined } from '@ant-design/icons'
import { getAllUsers, getActiveUsers, getInactiveUsers } from '../../services/userService'


const StatsSection: React.FC = () => {
    const [allUsers, setAllUsers] = React.useState(0);
    const [activeUsers, setActiveUsers] = React.useState(0);
    const [inactiveUsers, setInactiveUsers] = React.useState(0);

    React.useEffect(() => {
        getAllUsers().then((response) => setAllUsers(response.total))
        getActiveUsers().then((response) => setActiveUsers(response.total))
        getInactiveUsers().then((response) => setInactiveUsers(response.total))
    }, []);

    return (
        <div className={styles.statsContainer}>
            <StatsCard text="Total users" number={allUsers}
                description="Total registered users" icon={<CloudOutlined />} />
            <StatsCard text="Active users" number={activeUsers}
                description="Total active users" icon={<BulbOutlined />} />
            <StatsCard text="Inactive users" number={inactiveUsers}
                description="Total inactive users" icon={<PoweroffOutlined />} />
        </div>)
}

export default StatsSection;