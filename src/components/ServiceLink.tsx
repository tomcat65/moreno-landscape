'use client';

import Link from 'next/link';
import { trackServiceInterest } from '@/lib/analytics';

interface ServiceLinkProps {
  href: string;
  serviceName: string;
  className?: string;
  children: React.ReactNode;
}

export default function ServiceLink({ 
  href, 
  serviceName, 
  className,
  children 
}: ServiceLinkProps) {
  const handleClick = () => {
    trackServiceInterest(serviceName);
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}

