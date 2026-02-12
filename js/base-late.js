/// Overlay

document.addEventListener('DOMContentLoaded', () => {

    const settingsOverlay = document.querySelector(".overlay"); 
    settingsOverlay.addEventListener("click", (e) => { 
        if (e.target === settingsOverlay) { 
            history.back(); 
            console.log("overlay click"); 
        }
    });
    
});

//
// Theme List 
//

document.addEventListener('DOMContentLoaded', () => {

    
    let pageHueIndex = getHueValueIndex(); 
    let pageDarkMode = localStorage.getItem("theme-dark-mode");

    

    const themeItemsColor = document.querySelectorAll('.btn-hue');
    const themeItemDark = document.querySelector("#btn-enable-dark-theme"); 
    const themeItemLight = document.querySelector("#btn-enable-light-theme"); 

    function updatePageHueIndex(idx) { 
        pageHueIndex = idx; 
        localStorage.setItem("theme-hue-index", idx); 
        console.log(`page hue updated: ${pageHueIndex}`); 
        document.documentElement.style.setProperty("--color-primary-hue", 
            themeItemsColor[pageHueIndex].getAttribute("data-hue")
        );
    }

    function updatePageDarkMode(mode) { 
        pageDarkMode = mode ? "on" : "off"; 
        localStorage.setItem("theme-dark-mode", pageDarkMode); 

        document.body.classList.add("animate-everything"); 
        document.body.setAttribute("data-dark-mode", pageDarkMode); 
        setTimeout(() => {
            document.body.classList.remove("animate-everything"); 
        }, 500);
    }

    function updateThemeItems() {
        themeItemsColor.forEach((it, idx) => {
            it.classList.toggle('active', idx === pageHueIndex);
        });
    }

    function updateDarkModeItems() { 
        const isDark = pageDarkMode == "on"; 
        themeItemDark.classList.toggle('active', isDark); 
        themeItemLight.classList.toggle('active', !isDark); 
    }

    themeItemsColor.forEach((it, idx) => { 
        it.addEventListener("click", (e) => { 
            updatePageHueIndex(idx);      
            updateThemeItems(); 
        });
    });

    themeItemLight.addEventListener("click", (e) => {
        updatePageDarkMode(false); 
        updateDarkModeItems();
    });

    themeItemDark.addEventListener("click", (e) => { 
        updatePageDarkMode(true); 
        updateDarkModeItems(); 
    });

    updateThemeItems(); 
    updateDarkModeItems(); 
}); 