/**
 * Malay Lady Prompt Generator - Embedding Script
 * This script provides an easy way to embed the prompt generator into any website.
 */

(function() {
    // Configuration object with default values
    const defaultConfig = {
        width: '100%',
        height: '800px',
        theme: 'auto', // 'light', 'dark', or 'auto'
        showVisitorInfo: true,
        showFooter: true,
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    };
    
    /**
     * Embeds the prompt generator into the specified element
     * @param {string|HTMLElement} target - The target element or selector to embed the generator into
     * @param {Object} config - Configuration options
     */
    window.embedPromptGenerator = function(target, config = {}) {
        // Merge default config with user config
        const finalConfig = { ...defaultConfig, ...config };
        
        // Get the target element
        const targetElement = typeof target === 'string' 
            ? document.querySelector(target) 
            : target;
        
        if (!targetElement) {
            console.error('Target element not found:', target);
            return;
        }
        
        // Create iframe element
        const iframe = document.createElement('iframe');
        
        // Set iframe attributes
        iframe.src = getScriptPath() + '/index.html' + buildQueryParams(finalConfig);
        iframe.width = finalConfig.width;
        iframe.height = finalConfig.height;
        iframe.title = 'Malay Lady Prompt Generator';
        iframe.style.border = 'none';
        iframe.style.borderRadius = finalConfig.borderRadius;
        iframe.style.boxShadow = finalConfig.boxShadow;
        
        // Add a class for potential styling
        iframe.className = 'prompt-generator-iframe';
        
        // Clear the target element and append the iframe
        targetElement.innerHTML = '';
        targetElement.appendChild(iframe);
        
        // Return the iframe for potential further manipulation
        return iframe;
    };
    
    /**
     * Gets the path of the current script
     * @returns {string} The path to the script directory
     */
    function getScriptPath() {
        const scripts = document.getElementsByTagName('script');
        const currentScript = scripts[scripts.length - 1];
        const scriptPath = currentScript.src;
        return scriptPath.substring(0, scriptPath.lastIndexOf('/'));
    }
    
    /**
     * Builds query parameters from the config object
     * @param {Object} config - The configuration object
     * @returns {string} The query string
     */
    function buildQueryParams(config) {
        const params = new URLSearchParams();
        
        if (config.theme !== 'auto') {
            params.append('theme', config.theme);
        }
        
        if (!config.showVisitorInfo) {
            params.append('hideVisitorInfo', 'true');
        }
        
        if (!config.showFooter) {
            params.append('hideFooter', 'true');
        }
        
        const queryString = params.toString();
        return queryString ? '?' + queryString : '';
    }
})(); 