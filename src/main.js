import './app.css';
// import App from './App.svelte';
import Main from './routes/+page.svelte';
// import './lib/TailwindCSS.svelte';
import Login from './routes/login/+page.svelte';

const app = new Main({
  target: document.getElementById('app'),
});

export default app;
