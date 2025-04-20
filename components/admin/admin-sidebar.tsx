"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Camera,
  Users,
  MessageSquare,
  FileText,
  Package,
  Bell,
  Settings,
  Moon,
  Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AdminSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
    },
    {
      title: "Triage Feed",
      icon: Camera,
      href: "/admin/triage",
    },
    {
      title: "Patient List",
      icon: Users,
      href: "/admin/patients",
    },
    {
      title: "Consultations",
      icon: MessageSquare,
      href: "/admin/consultations",
    },
    {
      title: "Medical Records",
      icon: FileText,
      href: "/admin/records",
    },
    {
      title: "Medication & Inventory",
      icon: Package,
      href: "/admin/inventory",
    },
    {
      title: "Alerts & Outbreaks",
      icon: Bell,
      href: "/admin/alerts",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/admin/settings",
    },
  ]

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex items-center justify-between p-4">
          <Link href="/admin" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-sky-600">HealNet</span>
            <span className="text-xs bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full">Admin</span>
          </Link>
          <SidebarTrigger />
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="p-4">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <>
                <Sun className="mr-2 h-4 w-4" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="mr-2 h-4 w-4" />
                Dark Mode
              </>
            )}
          </Button>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
