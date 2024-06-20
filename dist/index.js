// Importing CSS files
import './dist/css/background_icons.css';
import './dist/css/blur_group.css';
import './dist/css/fades.css';
import './dist/css/scroller.css';

// Import all scripts into a single object
import allScripts from './dist/js'; 

// Log a message
console.log('Fun effects loaded!');

// Re-export the combined scripts object (optional)
export default allScripts;
