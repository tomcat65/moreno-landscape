'use client';

import { useEffect, useState } from 'react';
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
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer GA loading until after page is fully interactive and user is idle
    // This reduces main-thread blocking and unused JavaScript
    const loadGA = () => {
      if (typeof window === 'undefined') return;
      
      // Wait for page to be fully interactive
      if (document.readyState === 'complete') {
        // Use requestIdleCallback with longer timeout to defer more aggressively
        if ('requestIdleCallback' in window) {
          requestIdleCallback(
            () => setShouldLoad(true),
            { timeout: 5000 } // Wait up to 5 seconds for idle
          );
        } else {
          // Fallback: wait 3 seconds after page load
          setTimeout(() => setShouldLoad(true), 3000);
        }
      } else {
        // Wait for page load, then defer
        window.addEventListener('load', () => {
          if ('requestIdleCallback' in window) {
            requestIdleCallback(
              () => setShouldLoad(true),
              { timeout: 5000 }
            );
          } else {
            setTimeout(() => setShouldLoad(true), 3000);
          }
        }, { once: true });
      }
    };
    
    loadGA();
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      {/* Load GA script only after user is idle (non-blocking, reduces unused code) */}
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

