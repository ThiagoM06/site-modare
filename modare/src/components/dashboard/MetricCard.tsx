import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  icon: LucideIcon;
  description?: string;
}

export function MetricCard({ title, value, change, icon: Icon, description }: MetricCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="font-heading text-3xl font-semibold mt-2">{value}</p>
          {change && (
            <p className={cn(
              "text-sm mt-1",
              change.type === "increase" ? "text-green-600" : "text-red-600"
            )}>
              {change.type === "increase" ? "+" : "-"}{change.value}% vs. mês anterior
            </p>
          )}
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <div className="p-3 bg-secondary rounded-lg">
          <Icon className="h-5 w-5 text-accent" />
        </div>
      </div>
    </div>
  );
}
