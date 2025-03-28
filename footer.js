        // Responsive footer script
        function adjustFooter() {
            const footer = document.querySelector('.footer');
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.scrollHeight;

            // Ensure footer stays at bottom even on short content pages
            if (bodyHeight < windowHeight) {
                footer.style.position = 'fixed';
                footer.style.bottom = '0';
                footer.style.left = '0';
            } else {
                footer.style.position = 'static';
            }
        }

        // Run on page load and window resize
        window.addEventListener('load', adjustFooter);
        window.addEventListener('resize', adjustFooter);