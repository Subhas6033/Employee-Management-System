import React from "react";
import {
  ListTodo,
  CheckCircle,
  Clock,
  Play,
  Send,
  RotateCcw,
} from "lucide-react";
import { Button } from "../index";

const EmployeeDashboard = () => {
  const stats = [
    { title: "Total Tasks", value: "24", Icon: ListTodo, color: "#e07a5f" },
    { title: "Completed", value: "18", Icon: CheckCircle, color: "#10b981" },
    { title: "In Progress", value: "4", Icon: Play, color: "#3b82f6" },
    { title: "Pending", value: "2", Icon: Clock, color: "#f59e0b" },
  ];

  const myTasks = [
    {
      title: "Complete API Documentation",
      project: "Backend API",
      due: "Today",
      priority: "high",
      status: "in-progress",
      progress: 75,
    },
    {
      title: "Review Pull Requests",
      project: "Code Review",
      due: "Tomorrow",
      priority: "medium",
      status: "pending",
      progress: 0,
    },
    {
      title: "Update User Authentication",
      project: "Security",
      due: "Dec 15",
      priority: "high",
      status: "completed",
      progress: 100,
    },
    {
      title: "Fix Navigation Bug",
      project: "Frontend",
      due: "Dec 18",
      priority: "medium",
      status: "pending",
      progress: 0,
    },
  ];

  const recentActivity = [
    { action: "Completed", item: "Database Optimization", time: "2 hours ago" },
    { action: "Submitted", item: "Weekly Report", time: "4 hours ago" },
    { action: "Commented on", item: "Design Review", time: "Yesterday" },
    { action: "Completed", item: "Testing Phase 1", time: "Yesterday" },
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
      case "completed":
        return "bg-[var(--color-success-light)] text-[var(--color-success)]";
      case "in-progress":
        return "bg-[var(--color-info-light)] text-[var(--color-info)]";
      case "pending":
        return "bg-[var(--color-warning-light)] text-[var(--color-warning)]";
      default:
        return "bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)]";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold  text-[var(--color-text-primary)]">
            My Dashboard
          </h1>
          <p className="mt-1 text-[var(--color-text-secondary)]">
            Track your tasks and progress
          </p>
        </div>

        <div className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] rounded-[var(--radius-xl)] p-6 sm:p-8 mb-8 text-white shadow-[var(--shadow-lg)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold  text-[var(--color-text-primary)]">
                Welcome back, Subhas!
              </h2>
              <p className="mt-1 text-white/80">
                You have 6 tasks due this week. Keep up the great work!
              </p>
            </div>
            <Button className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
              <Send size={14} className="mr-2" />
              Submit Report
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map(({ title, value, Icon, color }) => (
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
                My Tasks
              </h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-[var(--color-accent)]"
              >
                View All
              </Button>
            </div>
            <div className="divide-y divide-[var(--color-border)]">
              {myTasks.map((task) => (
                <div
                  key={task.title}
                  className="p-4 hover:bg-[var(--color-bg-secondary)] transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-[var(--color-text-primary)]">
                          {task.title}
                        </h3>
                        <span
                          className={`px-2 py-0.5 rounded-[var(--radius-full)] text-xs font-medium ${getPriorityColor(task.priority)}`}
                        >
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        {task.project}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {task.due}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium ${getStatusColor(task.status)}`}
                      >
                        {task.status}
                      </span>
                    </div>
                  </div>
                  {task.progress > 0 && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-[var(--color-text-muted)]">
                          Progress
                        </span>
                        <span className="text-xs font-medium text-[var(--color-text-primary)]">
                          {task.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--color-accent)] rounded-full transition-all duration-500"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--color-border)] overflow-hidden">
              <div className="p-6 border-b border-[var(--color-border)]">
                <h2 className="text-lg font-semibold  text-[var(--color-text-primary)]">
                  Recent Activity
                </h2>
              </div>
              <div className="p-4 space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-[var(--radius-full)] bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
                      <CheckCircle
                        size={12}
                        className="text-[var(--color-accent)]"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-primary)]">
                        <span className="font-medium">{activity.action}</span>{" "}
                        {activity.item}
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--color-border)] p-6">
              <h2 className="text-lg font-semibold  text-[var(--color-text-primary)] mb-4">
                Weekly Goal
              </h2>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="var(--color-bg-tertiary)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="var(--color-accent)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="351.86"
                      strokeDashoffset="87.96"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[var(--color-text-primary)]">
                      75%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  18 of 24 tasks completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
