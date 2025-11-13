import styles from './stats-card.module.scss'

interface StatsCardProps {
    text: string;
    number: number;
    description: string;
    icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ text, number, description, icon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <p className={styles.text}>{text}</p>
                <div className={styles.icon}>{icon}</div>
            </div>
            <span className={styles.number}>{number}</span>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default StatsCard;