import React from 'react';
import { cn } from '../../lib/utils';

export function Container({ 
  children, 
  className, 
  as: Component = 'div' 
}: { 
  children: React.ReactNode; 
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Component className={cn("max-w-7xl mx-auto px-4 md:px-6", className)}>
      {children}
    </Component>
  );
}
