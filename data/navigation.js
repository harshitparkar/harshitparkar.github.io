/**
 * Navigation Configuration
 * 
 * Add or remove sections here to automatically update the header navigation.
 * Each item requires:
 *   - id: The section's HTML id (used for scroll targeting)
 *   - label: The display text shown in the navigation
 *   - enabled: Set to false to temporarily hide a section from nav
 */

export const NAV_ITEMS = [
    { id: 'home', label: 'Home', enabled: true },
    { id: 'experience', label: 'Experience', enabled: true },
    { id: 'trusted-by', label: 'Trusted By', enabled: true },
    { id: 'tech', label: 'Tech', enabled: true },
    { id: 'awards', label: 'Awards', enabled: true },
    { id: 'projects', label: 'Projects', enabled: true },
    { id: 'contact', label: 'Contact', enabled: true },
];

/**
 * Header configuration constants
 */
export const HEADER_CONFIG = {
    height: 72,
    scrollOffset: 90, // matches scroll-margin-top in globals.css
};
