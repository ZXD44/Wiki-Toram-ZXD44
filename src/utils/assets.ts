/**
 * Helper to resolve image paths for GitHub Pages deployment.
 * Prepends the BASE_URL to the path if it's not a full URL.
 */
export function getAssetPath(path: string | undefined): string {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('https') || path.startsWith('data:')) {
    return path;
  }
  
  // import.meta.env.BASE_URL is '/' in dev, and '/repo-name/' in production
  const base = (import.meta as any).env.BASE_URL;
  
  // Ensure we don't end up with double slashes
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${cleanBase}${cleanPath}`;
}
