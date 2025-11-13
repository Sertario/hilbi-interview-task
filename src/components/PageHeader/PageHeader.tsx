import { useTranslation } from 'react-i18next'
import styles from './page-header.module.scss'

export default function PageHeader() {
    const { t } = useTranslation()

    return (
        <div className={styles.header}>
            <p className={styles.text}>Home</p>
            <p className={styles.description}>{t('dashboard.description')}</p>        
        </div>
    )
}