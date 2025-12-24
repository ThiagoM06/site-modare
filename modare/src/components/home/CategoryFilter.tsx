import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onSelect("")}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
          selected === ""
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            selected === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
