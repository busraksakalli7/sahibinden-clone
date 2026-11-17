import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "antd/dist/reset.css";

// Set favicon to the icon file in src/assets/icons (kutuLogo.png)
// This uses import.meta.url so it works in dev and build without moving files.
const setFavicon = (pathRelativeToSrc) => {
  try {
    const href = new URL(pathRelativeToSrc, import.meta.url).href;
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = href;
  } catch (e) {
    // ignore if URL resolution fails
  }
};

setFavicon('./assets/icons/kutuLogo.png');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
