'use client';

import { trackPhoneClick } from '@/lib/analytics';

interface PhoneLinkProps {
  phoneNumber?: string;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

export default function PhoneLink({ 
  phoneNumber = '832.718.0431', 
  className,
  children,
  'aria-label': ariaLabel
}: PhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(phoneNumber);
  };

  const telLink = `tel:+1${phoneNumber.replace(/\D/g, '')}`;
  
  // Extract text from children for aria-label if not provided
  const getAccessibleText = (): string => {
    if (ariaLabel) return ariaLabel;
    if (typeof children === 'string') return children;
    return `Call ${phoneNumber}`;
  };

  return (
    <a 
      href={telLink} 
      onClick={handleClick}
      className={className}
      aria-label={getAccessibleText()}
    >
      {children}
    </a>
  );
}




