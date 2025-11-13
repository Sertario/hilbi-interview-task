import styles from './title.module.scss'

interface TitleProps {
    text: string;
    buttonVisible: boolean;
    onButtonClick: () => void;
}

const Title: React.FC<TitleProps> = ({ text, buttonVisible, onButtonClick }) => {
    return (
        <div className={styles.header}>
            <p className={styles.text}>{text}</p>
            {buttonVisible &&
                <button className={`${styles.button} btn`}
                    onClick={onButtonClick}>All users</button>}
        </div>
    )
}

export default Title;