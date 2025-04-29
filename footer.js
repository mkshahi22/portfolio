// Footer.js

function adjustFooter() {
    const footer = document.querySelector('.footer');
    if (!footer) return; // Safety check in case .footer is missing

    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    // Fix footer to bottom if page content is shorter than viewport
    if (bodyHeight < windowHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.left = '0';
        footer.style.right = '0';
    } else {
        footer.style.position = 'static';
    }
}

// Optimize resize events using debounce (optional but recommended)
let resizeTimeout;
function debounceAdjustFooter() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adjustFooter, 100);
}

// Run on load and resize
window.addEventListener('load', adjustFooter);
window.addEventListener('resize', debounceAdjustFooter);
