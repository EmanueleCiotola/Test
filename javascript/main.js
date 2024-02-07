// gestione degli items osservati dopo il caricamento della pagina (utile per animazioni)
const loadingScreen = document.getElementById("loadingScreen");
window.addEventListener("load", function() {

    // loadingScreen di almeno un secondo anche con caricamenti veloci
    var loadTime = Date.now() - performance.timeOrigin;
    var delay = Math.max(2500 - loadTime, 0);

    setTimeout(function() {
        // rimozione loadingScreen
        loadingScreen.classList.add("loadingScreen--hidden");

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
    }, delay);
});




// gestione swiper conoscenze
var bloccoCorrente = "bloccoIconeCompetenze__primoBlocco";
function swipeBloccoIconeCompetenze(bloccoDaMostrare) {
    if (bloccoCorrente != bloccoDaMostrare) {
        // rimuovi vecchio blocco
        var vecchioBlocco = document.querySelectorAll("." + bloccoCorrente);
        vecchioBlocco.forEach((element) => { element.classList.remove("bloccoCorrente"); });

        // aggiorna blocco mostrato
        var nuovoBlocco = document.querySelectorAll("." + bloccoDaMostrare);
        nuovoBlocco.forEach((element) => { element.classList.add("bloccoCorrente"); });
        bloccoCorrente = bloccoDaMostrare;
    }
}
function swipeAvantiBloccoCompetenze() {
    if (bloccoCorrente == "bloccoIconeCompetenze__primoBlocco") swipeBloccoIconeCompetenze("bloccoIconeCompetenze__secondoBlocco");
    else if (bloccoCorrente == "bloccoIconeCompetenze__secondoBlocco") swipeBloccoIconeCompetenze("bloccoIconeCompetenze__terzoBlocco");
    else if (bloccoCorrente == "bloccoIconeCompetenze__terzoBlocco") swipeBloccoIconeCompetenze("bloccoIconeCompetenze__quartoBlocco");
    else swipeBloccoIconeCompetenze("bloccoIconeCompetenze__primoBlocco");
}



// gestione dei link esterni
function apriUrl(url) { window.open(url, "_blank"); }



// evitare scroll automatico quando si ricarica pagina
history.scrollRestoration = "manual";