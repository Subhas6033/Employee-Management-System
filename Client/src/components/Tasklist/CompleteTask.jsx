import React from "react";
import { CheckCircle, EllipsisVertical } from "lucide-react";

const CompleteTask = ({
  taskTitle = "Database optimization completed",
  assignee = "Mike Chen",
  completedDate = "Yesterday",
  priority = "low",
}) => {
  const priorityColors = {
    high: "bg-[var(--color-error-light)] text-[var(--color-error)]",
    medium: "bg-[var(--color-warning-light)] text-[var(--color-warning)]",
    low: "bg-[var(--color-success-light)] text-[var(--color-success)]",
  };

  return (
    <div className="bg-[var(--color-bg-secondary)] rounded-[var(--radius-md)] p-3 hover:shadow-[var(--shadow-sm)] transition-all duration-200 group opacity-75">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-medium text-sm text-[var(--color-text-primary)] line-clamp-2">
          {taskTitle}
        </h4>
        <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
          <EllipsisVertical size={12} />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-[var(--radius-full)] bg-[var(--color-success)] flex items-center justify-center">
            <CheckCircle size={9} color="white" />
          </div>
          <span className="text-xs text-[var(--color-text-muted)]">
            {assignee}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-0.5 rounded-[var(--radius-full)] text-[10px] font-medium ${priorityColors[priority]}`}
          >
            {priority}
          </span>
          <span className="text-[10px] text-[var(--color-text-muted)] flex items-center gap-1">
            <CheckCircle size={9} className="text-[var(--color-success)]" />
            {completedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
