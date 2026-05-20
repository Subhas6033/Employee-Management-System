import React from "react";
import {
  Users,
  ListTodo,
  TrendingUp,
  CheckCircle,
  Clock,
  UserPlus,
  Briefcase,
  CalendarDays,
  Ellipsis,
} from "lucide-react";
import { Button, Card } from "../index";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Employees",
      value: "156",
      change: "+12%",
      Icon: Users,
      color: "#e07a5f",
    },
    {
      title: "Active Tasks",
      value: "89",
      change: "+5%",
      Icon: ListTodo,
      color: "#10b981",
    },
    {
      title: "Completed Today",
      value: "34",
      change: "+18%",
      Icon: CheckCircle,
      color: "#3b82f6",
    },
    {
      title: "Pending Reviews",
      value: "12",
      change: "-3%",
      Icon: Clock,
      color: "#f59e0b",
    },
  ];

  const recentEmployees = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      department: "Engineering",
      status: "active",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      department: "Product",
      status: "active",
      avatar: "MC",
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      department: "Design",
      status: "pending",
      avatar: "ED",
    },
    {
      name: "James Wilson",
      role: "Data Analyst",
      department: "Analytics",
      status: "active",
      avatar: "JW",
    },
  ];

  const recentTasks = [
    {
      title: "Q3 Performance Review",
      assignee: "All Department Heads",
      due: "Today",
      priority: "high",
      status: "pending",
    },
    {
      title: "Update Employee Handbook",
      assignee: "HR Team",
      due: "Tomorrow",
      priority: "medium",
      status: "in-progress",
    },
    {
      title: "Security Training",
      assignee: "All Employees",
      due: "Dec 15",
      priority: "high",
      status: "completed",
    },
    {
      title: "Benefits Enrollment",
      assignee: "HR Team",
      due: "Dec 20",
      priority: "medium",
      status: "pending",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-[var(--color-error-light)] text-[var(--color-error)]";
      case "medium":
        return "bg-[var(--color-warning-light)] text-[var(--color-warning)]";
      default:
        return "bg-[var(--color-success-light)] text-[var(--color-success)]";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-[var(--color-success-light)] text-[var(--color-success)]";
      case "pending":
        return "bg-[var(--color-warning-light)] text-[var(--color-warning)]";
      case "in-progress":
        return "bg-[var(--color-info-light)] text-[var(--color-info)]";
      default:
        return "bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)]";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold  text-[var(--color-text-primary)]">
            Admin Dashboard
          </h1>
          <p className="mt-1 text-[var(--color-text-secondary)]">
            Manage your team and track performance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map(({ title, value, change, Icon, color }) => (
            <div
              key={title}
              className="bg-white rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-md)] border border-[var(--color-border)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <span
                  className={`text-sm font-medium ${change.startsWith("+") ? "text-[var(--color-success)]" : "text-[var(--color-error)]"}`}
                >
                  {change}
                </span>
              </div>
              <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                {value}
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                {title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--color-border)] overflow-hidden">
            <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between">
              <h2 className="text-lg font-semibold  text-[var(--color-text-primary)]">
                Recent Employees
              </h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-[var(--color-accent)]"
              >
                <UserPlus size={14} className="mr-1" /> Add New
              </Button>
            </div>
            <div className="divide-y divide-[var(--color-border)]">
              {recentEmployees.map((employee) => (
                <div
                  key={employee.name}
                  className="p-4 hover:bg-[var(--color-bg-secondary)] transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-[var(--radius-full)] bg-[var(--color-accent)] text-white flex items-center justify-center font-semibold text-sm">
                        {employee.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-text-primary)]">
                          {employee.name}
                        </p>
                        <p className="text-sm text-[var(--color-text-muted)]">
                          {employee.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {employee.department}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium ${getStatusColor(employee.status)}`}
                      >
                        {employee.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--color-border)] overflow-hidden">
            <div className="p-6 border-b border-[var(--color-border)]">
              <h2 className="text-lg font-semibold  text-[var(--color-text-primary)]">
                Quick Actions
              </h2>
            </div>
            <div className="p-4 space-y-3">
              {[
                { Icon: UserPlus, label: "Add Employee", primary: true },
                { Icon: Briefcase, label: "Create Task", primary: false },
                {
                  Icon: CalendarDays,
                  label: "Schedule Review",
                  primary: false,
                },
                { Icon: TrendingUp, label: "View Reports", primary: false },
              ].map(({ Icon, label, primary }) => (
                <button
                  key={label}
                  className={`w-full flex items-center gap-3 p-3 rounded-[var(--radius-md)] transition-all duration-200 ${primary ? "bg-[var(--color-accent-light)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white" : "bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)]"}`}
                >
                  <Icon size={16} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--color-border)] overflow-hidden">
          <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between">
            <h2 className="text-lg font-semibold  text-[var(--color-text-primary)]">
              Recent Tasks
            </h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-[var(--color-accent)]"
            >
              View All
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[var(--color-bg-secondary)]">
                <tr>
                  {[
                    "Task",
                    "Assignee",
                    "Due Date",
                    "Priority",
                    "Status",
                    "",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-3 text-left text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {recentTasks.map((task) => (
                  <tr
                    key={task.title}
                    className="hover:bg-[var(--color-bg-secondary)] transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-medium text-[var(--color-text-primary)]">
                      {task.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                      {task.assignee}
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-muted)]">
                      {task.due}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium ${getPriorityColor(task.priority)}`}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium ${getStatusColor(task.status)}`}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">
                        <Ellipsis size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
