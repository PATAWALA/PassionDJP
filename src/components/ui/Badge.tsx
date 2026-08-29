// src/components/ui/Badge.tsx
import { cn } from '@/lib/utils';

type Variant = 'default' | 'gold' | 'blue' | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  icon?: React.ReactNode;
}

const variants: Record<Variant, string> = {
  default: 'bg-accent-light text-accent-hover border-accent/30',
  gold: 'bg-accent text-white border-accent',
  blue: 'bg-accent-blue-light text-primary border-primary/20',
  outline: 'bg-transparent text-ink border-border',
};

export function Badge({ className, variant = 'default', icon, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border',
        variants[variant],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}