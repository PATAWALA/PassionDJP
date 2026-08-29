// src/components/ui/Card.tsx
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-border rounded-lg p-6 shadow-card transition-all',
        hover && 'hover:shadow-lg hover:-translate-y-0.5 hover:border-accent/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Sous-composants optionnels pour structurer la carte
export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('', className)}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mt-6 pt-4 border-t border-border', className)}>{children}</div>;
}