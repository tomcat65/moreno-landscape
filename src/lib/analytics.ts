// lib/analytics.ts

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-BLTMR50BSM';

// Track page views (for client-side navigation)
export const pageview = (url: string) => {
  // Wait for gtag to be available (deferred loading)
  if (typeof window !== 'undefined') {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    } else {
      // Queue the pageview if gtag isn't loaded yet
      // This will be processed when GA loads
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtag.config': {
          [GA_MEASUREMENT_ID]: {
            page_path: url,
          },
        },
      });
    }
  }
};

// Track custom events
export const event = (action: string, params?: Record<string, unknown>) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, params);
  }
};

// Specific event helpers for Moreno Landscaping

// Track phone number clicks
export const trackPhoneClick = (phoneNumber: string = '832.718.0431') => {
  event('phone_click', {
    phone_number: phoneNumber,
    method: 'click',
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string, serviceType?: string) => {
  event('generate_lead', {
    form_name: formName,
    service_type: serviceType || 'general',
    currency: 'USD',
  });
};

// Track CTA button clicks
export const trackCTAClick = (buttonText: string, buttonLocation: string) => {
  event('get_estimate_click', {
    button_text: buttonText,
    button_location: buttonLocation,
  });
};

// Track service interest (Learn More clicks)
export const trackServiceInterest = (serviceName: string) => {
  event('service_interest', {
    service_name: serviceName,
    content_type: 'service',
  });
};

