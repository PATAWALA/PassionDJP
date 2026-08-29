// src/components/ui/ProseLegal.tsx
import { cn } from '@/lib/utils';

interface ProseLegalProps {
  children: React.ReactNode;
  className?: string;
}

export function ProseLegal({ children, className }: ProseLegalProps) {
  return (
    <div className={cn('prose-legal', className)}>
      {children}
    </div>
  );
}