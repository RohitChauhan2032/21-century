import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="py-4 px-6 md:px-12 bg-slate-50 border-b border-border-base z-10 relative">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span className="font-medium">Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          // Custom mapping for readable titles
          let formattedValue = value
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
            
          if (value.toLowerCase() === 'etp') formattedValue = 'ETP';
          if (value.toLowerCase() === 'stp') formattedValue = 'STP';
          if (value.toLowerCase() === 'wtp') formattedValue = 'WTP';
          if (value.toLowerCase() === 'zld') formattedValue = 'ZLD';
          if (value.toLowerCase() === 'ro') formattedValue = 'RO';
          if (value.toLowerCase() === 'dm') formattedValue = 'DM';
          if (value.toLowerCase() === 'uf') formattedValue = 'UF';

          return (
            <li key={to} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {isLast ? (
                <span className="font-semibold text-text-base truncate max-w-[200px] md:max-w-none" aria-current="page">
                  {formattedValue}
                </span>
              ) : (
                <Link to={to} className="hover:text-primary transition-colors font-medium">
                  {formattedValue}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
