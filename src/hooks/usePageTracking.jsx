import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Sends a GA4 page_view on every route change. The gtag snippet in index.html
// only fires once on initial load; in an SPA, client-side navigations don't
// reload the page, so we report them manually here.
const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag !== 'function') return;
        const page_path = location.pathname + location.search + location.hash;
        window.gtag('event', 'page_view', {
            page_path,
            page_location: window.location.href,
            page_title: document.title,
        });
    }, [location]);
};

export default usePageTracking;
