'use client';

import { trackPhoneClick } from '@/lib/analytics';

interface PhoneLinkProps {
  phoneNumber?: string;
  className?: string;
  children: React.ReactNode;
}

export default function PhoneLink({ 
  phoneNumber = '832.718.0431', 
  className,
  children 
}: PhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(phoneNumber);
  };

  const telLink = `tel:+1${phoneNumber.replace(/\D/g, '')}`;

  return (
    <a 
      href={telLink} 
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}



