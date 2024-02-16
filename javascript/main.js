// gestione degli items osservati dopo il caricamento della pagina (utile per animazioni)
const loadingScreen = document.getElementById("loadingScreen");
function onLoadHandler() {
    // loadingScreen di almeno un secondo anche con caricamenti veloci
    var loadTime = Date.now() - performance.timeOrigin;
    var delay = Math.max(2000 - loadTime, 0);

    setTimeout(function() {
        // rimozione schermata caricamento
        loadingScreen.classList.add("loadingScreen--hidden");

        // aspetta effetto opacità
        setTimeout(() => {
            // gestione items osservati
            var elementiDaOsservare = document.querySelectorAll('.osservato');
            var callback = function(items) {
                items.forEach((item) => {
                    var position = item.target.getBoundingClientRect();
                    if (item.isIntersecting) {
                        item.target.classList.add("mostrato");
                    } else if (position.top > 0) { // rimuove la classe mostrato solo se l'item si trova nella parte non visibile superiore dello schermo
                        item.target.classList.remove("mostrato");
                    }
                });
            }
            var observer = new IntersectionObserver(callback, {threshold: 0});
            elementiDaOsservare.forEach((element) => {
                observer.observe(element);
            });

            // permetti overflow nella pagina caricata
            document.body.classList.remove("body--loading");
        }, 250);
    }, delay);
    window.removeEventListener("load", onLoadHandler);
}
// Aggiunta dell'event listener
window.addEventListener("load", onLoadHandler);



// gestione dei link esterni
function apriUrl(url) { window.open(url, "_blank"); }



// evitare scroll automatico quando si ricarica pagina
history.scrollRestoration = "manual";



// gestione download
function download(daScaricare, nomeFileScaricato) {  
    // Crea un link nascosto
    var hiddenLink = document.createElement("a");
    hiddenLink.style.display = "none"; // Nascondi il link
    hiddenLink.href = daScaricare;
    hiddenLink.download = nomeFileScaricato; // Nome del file dopo il download
    document.body.appendChild(hiddenLink);
  
    // Simula un clic sul link
    hiddenLink.click();
  
    // Rimuovi il link dopo il download
    document.body.removeChild(hiddenLink);
  }