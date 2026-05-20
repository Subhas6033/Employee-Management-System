import React, { useState } from "react";
import { Plus, Search, CheckCircle, Clock, Play, XCircle } from "lucide-react";
import { Button, Card } from "../../components/index";
import {
  NewTask,
  AcceptTask,
  CompleteTask,
  FailedTask,
} from "../../components/index";

const Tasks = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "all", label: "All Tasks" },
    { id: "new", label: "New" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
    { id: "failed", label: "Failed" },
  ];

  const taskStats = [
    { category: "New", count: 12, Icon: Clock, color: "#3b82f6" },
    { category: "Active", count: 8, Icon: Play, color: "#10b981" },
    { category: "Completed", count: 45, Icon: CheckCircle, color: "#22c55e" },
    { category: "Failed", count: 3, Icon: XCircle, color: "#ef4444" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold  text-[var(--color-text-primary)]">
              Tasks
            </h1>
            <p className="mt-1 text-[var(--color-text-secondary)]">
              Manage and track all your tasks
            </p>
          </div>
          <Button bgColor="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-4 py-2.5 rounded-[var(--radius-md)] shadow-[var(--shadow-accent)]">
            <span className="flex items-center gap-2">
              <Plus size={12} />
              New Task
            </span>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {taskStats.map(({ category, count, Icon, color }) => (
            <div
              key={category}
              className="bg-white rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-sm)] border border-[var(--color-border)] flex items-center gap-4 hover:shadow-[var(--shadow-md)] transition-all duration-200"
            >
              <div
                className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center"
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                  {count}
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--color-border)] p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-[var(--radius-md)] text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? "bg-[var(--color-accent)] text-white"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
              />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-light)] transition-all duration-200 w-full sm:w-64"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--color-border)] overflow-hidden">
            <div className="p-4 border-b border-[var(--color-border)] bg-[var(--color-info-light)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[var(--color-info)]" />
                  <h3 className="font-semibold text-[var(--color-text-primary)]">
                    New Tasks
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-[var(--color-info)] text-white">
                  12
                </span>
              </div>
            </div>
            <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
              <NewTask />
              <NewTask />
              <NewTask />
            </div>
          </div>

          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--color-border)] overflow-hidden">
            <div className="p-4 border-b border-[var(--color-border)] bg-[var(--color-success-light)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Play size={14} className="text-[var(--color-success)]" />
                  <h3 className="font-semibold text-[var(--color-text-primary)]">
                    Active
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-[var(--color-success)] text-white">
                  8
                </span>
              </div>
            </div>
            <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
              <AcceptTask />
              <AcceptTask />
              <AcceptTask />
            </div>
          </div>

          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--color-border)] overflow-hidden">
            <div className="p-4 border-b border-[var(--color-border)] bg-[var(--color-warning-light)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-warning)]"
                  />
                  <h3 className="font-semibold text-[var(--color-text-primary)]">
                    Completed
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-[var(--color-warning)] text-white">
                  45
                </span>
              </div>
            </div>
            <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
              <CompleteTask />
              <CompleteTask />
              <CompleteTask />
            </div>
          </div>

          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--color-border)] overflow-hidden">
            <div className="p-4 border-b border-[var(--color-border)] bg-[var(--color-error-light)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <XCircle size={14} className="text-[var(--color-error)]" />
                  <h3 className="font-semibold text-[var(--color-text-primary)]">
                    Failed
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-[var(--color-error)] text-white">
                  3
                </span>
              </div>
            </div>
            <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
              <FailedTask />
              <FailedTask />
              <FailedTask />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
