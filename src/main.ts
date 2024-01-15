import './app.css'
import { createRoot } from 'svelte';
import App from './App.svelte'

// const app = new App({
//   target: document.getElementById('app'),
// });

const app = createRoot(App, { target: document.getElementById("app")! });

export default app
