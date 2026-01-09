document.addEventListener('DOMContentLoaded', () => {       /** waits until html is fully parsed */

        /** js references elements from code in html by id through these const*/
        const card     = document.getElementById('mapCard');
        const titleEl  = document.getElementById('cardTitle');
        const whenEl   = document.getElementById('cardWhen');
        const highEl   = document.getElementById('cardHighlights');
        const photosEl = document.getElementById('cardPhotos');

        /** look inside card, and find first element that matches .card-close (close btn) */
        const closeBtn = card?.querySelector('.card-close');    

        function openCardFromPin(pin) {

            /** reads pin's custom data attributes and sets text inside element */
            titleEl.textContent = pin.dataset.title || '';
            whenEl.textContent  = pin.dataset.when || '';
            highEl.textContent  = pin.dataset.highlights || '';
        
            /** parse photos from data attribute and turn to js arr using JSON.parse */
            let photos = [];
            photos = JSON.parse(pin.dataset.photos || '[]');

            /** turns each photo path to an img tag, and concats strings into 1 big html string*/
            photosEl.innerHTML = photos.map(src => `<img src="${src}" alt="">`).join('');   /** injects big html string into page */
        
            card.hidden = false;    /** make card visible */
        }

        function closeCard() {
            card.hidden = true;
        }

        /** finds every element matching map-pin */
        document.querySelectorAll('.map-pin').forEach(pin => {  /** for loop through pins */
            /** when pin is clicked => run fxn */
            pin.addEventListener('click', () => openCardFromPin(pin));
        });
    
        /* when .card-close elem is clocked => run fxn* */
        closeBtn?.addEventListener('click', closeCard);
});