import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  title: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-black mb-12">
      <Link to="/" className="text-white/40 hover:text-white transition-colors">
        <Home size={14} />
      </Link>
      {items.map((item, i) => (
        <React.Fragment key={item.href}>
          <ChevronRight size={12} className="text-white/20" />
          <Link 
            to={item.href} 
            className={i === items.length - 1 ? "text-secondary" : "text-white/40 hover:text-white transition-colors"}
          >
            {item.title}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}
