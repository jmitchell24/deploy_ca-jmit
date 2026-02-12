//
// Theme Init 
//


function getHueValueIndex() { 
    const index = parseInt(localStorage.getItem("theme-hue-index")) || 0;
    console.log(`initial page hue: ${index}`); 
    return index;
}

(function() { // update hue value 
    const hueValueTotal = 36; 

    let pageHueIndex = getHueValueIndex(); 
    pageHueIndex = Math.max(0, Math.min(hueValueTotal-1, pageHueIndex)); 
    localStorage.setItem("theme-hue-index", pageHueIndex); 
    
    document.documentElement.style.setProperty("--color-primary-hue", 
        pageHueIndex * 360 / (hueValueTotal - 1)
    );
})();


document.addEventListener('DOMContentLoaded', () => { // update dark mode (defaults to 'on')
    let pageDarkMode = localStorage.getItem("theme-dark-mode");
    pageDarkMode = pageDarkMode == "off" ? "off" : "on"; 
    localStorage.setItem("theme-dark-mode", pageDarkMode); 

    document.body.setAttribute("data-dark-mode", pageDarkMode);
}); 