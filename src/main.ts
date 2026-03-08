import './styles/global.css';
import { getCurrentRoute, onRouteChange, type Route } from './router.ts';
import { renderHome } from './pages/home.ts';
import { renderFeatures } from './pages/features.ts';
import { renderPricing } from './pages/pricing.ts';
import { renderAbout } from './pages/about.ts';
import { renderDemo, initDemo } from './pages/demo.ts';

const app = document.querySelector<HTMLDivElement>('#app')!;

function renderRoute(route: Route) {
  window.scrollTo(0, 0);

  switch (route) {
    case 'home':
      app.innerHTML = renderHome();
      break;
    case 'features':
      app.innerHTML = renderFeatures();
      break;
    case 'pricing':
      app.innerHTML = renderPricing();
      break;
    case 'about':
      app.innerHTML = renderAbout();
      break;
    case 'demo':
      app.innerHTML = renderDemo();
      // Wait for DOM then initialize the canvas demo
      requestAnimationFrame(() => {
        requestAnimationFrame(() => initDemo());
      });
      break;
    default:
      app.innerHTML = renderHome();
  }
}

// Initial render
renderRoute(getCurrentRoute());

// Listen for navigation
onRouteChange(renderRoute);
