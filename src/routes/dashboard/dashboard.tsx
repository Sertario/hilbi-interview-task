import { createFileRoute } from '@tanstack/react-router'
import PageHeader from '../../components/PageHeader/PageHeader'
import StatsSection from '../../components/StatsSection/StatsSection'
import LastActiveUsers from '@/components/FiveActiveUsers/FiveActiveUsers'
import styles from './dashboard.module.scss'

const Dashboard: React.FunctionComponent = () => {
  return (
    <div className={styles.pageWrapper}>
      <PageHeader />
      <StatsSection />
      <LastActiveUsers />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Dashboard,
})
