import { DashboardStats } from "@/components/admin/dashboard-stats"
import { RecentPatients } from "@/components/admin/recent-patients"
import { ActivityFeed } from "@/components/admin/activity-feed"
import { InventoryStatus } from "@/components/admin/inventory-status"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentPatients />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>

      <InventoryStatus />
    </div>
  )
}
