//
// Matomo 
//

  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//matomo.delm.win/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '5']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();



function initCodeWrapper(el) { 
    const pre = el.querySelector("pre"); 
    const preCode = pre.querySelector("code"); 
    
    const preLangText = preCode.getAttribute("data-lang") || "plaintext"; 
    const preCodeText = el.getAttribute("data-raw-code"); // pre.textContent || pre.innerText; 

    const footer = el.querySelector(".code-footer"); 
    const footerLang = el.querySelector(".code-footer > .code-footer-lang"); 
    const footerCopy = el.querySelector(".code-footer > .code-footer-copy");
    const footerChars = el.querySelector(".code-footer > .code-footer-chars"); 

    footerLang.innerText = preLangText; 
    footerChars.innerText = `${preCodeText.length} chars`; 
    footerCopy.innerText = "click to copy";

    footer.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(preCodeText);
            
            // Visual feedback
            const originalText = footerCopy.innerHTML;
            footerCopy.innerHTML = "copied...";
            
            // Reset after 2 seconds
            setTimeout(() => {
                footerCopy.innerHTML = originalText;
            }, 1500);
            
        } catch (err) {
            console.log("error while copying: " + err); 
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".code-wrapper").forEach(initCodeWrapper);

});
