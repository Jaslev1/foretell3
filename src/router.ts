// Simple hash-based router
export type Route = 'home' | 'features' | 'pricing' | 'about' | 'demo';

type RouteHandler = (route: Route) => void;

const listeners: RouteHandler[] = [];

export function getCurrentRoute(): Route {
  const hash = window.location.hash.replace('#', '') || 'home';
  return hash as Route;
}

export function navigate(route: Route) {
  window.location.hash = route;
}

export function onRouteChange(handler: RouteHandler) {
  listeners.push(handler);
}

window.addEventListener('hashchange', () => {
  const route = getCurrentRoute();
  listeners.forEach(fn => fn(route));
});

// Nav HTML shared across pages
export function renderNav(active: Route): string {
  const links: { id: Route; label: string }[] = [
    { id: 'home',     label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'pricing',  label: 'Pricing' },
    { id: 'about',    label: 'About' },
    { id: 'demo',     label: 'Demo' },
  ];

  return `
  <nav class="top-nav">
    <a href="#home" class="nav-logo">
      <svg class="nav-logo-icon" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="14" stroke="#f0a83c" stroke-width="1.5"/>
        <path d="M8 20 L13 13 L17 17 L22 9" stroke="#f0a83c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="22" cy="9" r="2" fill="#f0a83c"/>
      </svg>
      <span class="nav-logo-text">Foretell</span>
    </a>
    <ul class="nav-links">
      ${links.map(l => `
        <li><a href="#${l.id}" class="${active === l.id ? 'active' : ''}">${l.label}</a></li>
      `).join('')}
    </ul>
    <a href="#demo" class="btn-nav">Start Free Trial</a>
  </nav>`;
}

export function renderFooter(): string {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#home" class="nav-logo">
            <svg width="26" height="26" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="14" stroke="#f0a83c" stroke-width="1.5"/>
              <path d="M8 20 L13 13 L17 17 L22 9" stroke="#f0a83c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="22" cy="9" r="2" fill="#f0a83c"/>
            </svg>
            <span class="nav-logo-text">Foretell</span>
          </a>
          <p>AI forecasting intelligence for analysts, operators, and strategists who need to see further.</p>
        </div>
        <div class="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#demo">Live Demo</a></li>
            <li><a href="#">API Docs</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Foretell, Inc. All rights reserved.</p>
        <p>Built for the future-minded.</p>
      </div>
    </div>
  </footer>`;
}
