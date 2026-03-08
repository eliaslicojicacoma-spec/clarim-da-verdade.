export function trackEvent(name: string, properties?: any) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, properties);
  }
}

export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
}
