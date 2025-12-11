'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Deferred Google Analytics component
 * Loads GA after page load to avoid blocking initial render
 * Uses requestIdleCallback to defer until browser is idle
 */
export function DeferredGoogleAnalytics() {
  useEffect(() => {
    // Only load GA when browser is idle (after page is fully interactive)
    const loadGA = () => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Script will load via Script component below
        }, { timeout: 3000 });
      }
    };
    loadGA();
  }, []);

  return (
    <>
      {/* Load GA script after page is idle (non-blocking, reduces unused code) */}
      <Script
        id="google-analytics-loader"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-BLTMR50BSM`}
      />
      <Script
        id="google-analytics-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BLTMR50BSM', {
              page_path: window.location.pathname,
              // Optimize: disable automatic page views (we handle manually)
              send_page_view: false,
            });
          `,
        }}
      />
    </>
  );
}

