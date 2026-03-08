import React from 'react';
import { cn } from '../../lib/utils';
import { Container } from '../layout/Container';

interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function SectionShell({ children, id, className, containerClassName }: SectionShellProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
