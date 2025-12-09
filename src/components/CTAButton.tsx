'use client';

import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';
import { Button, type ButtonProps } from '@/components/ui/Button';

interface CTAButtonProps {
  href: string;
  location: string; // e.g., 'hero', 'footer', 'service_card'
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
  children: React.ReactNode;
}

// Helper to extract text from React children
function extractText(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) {
    return children.map(extractText).join(' ').trim();
  }
  if (children && typeof children === 'object' && 'props' in children) {
    return extractText(children.props?.children || '');
  }
  return 'Get Estimate';
}

export default function CTAButton({ 
  href, 
  location, 
  variant = 'green',
  size = 'md',
  className,
  children 
}: CTAButtonProps) {
  const handleClick = () => {
    const buttonText = extractText(children);
    trackCTAClick(buttonText, location);
  };

  return (
    <Link href={href} onClick={handleClick}>
      <Button variant={variant} size={size} className={className}>
        {children}
      </Button>
    </Link>
  );
}
