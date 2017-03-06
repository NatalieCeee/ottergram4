var LINKS = 'a';

function getLinksArray() {
    'use strict';
    // Selects all the elements that have a href tag in it
    var links = document.querySelectorAll(LINKS);
    // Converts nodelist into an array
    var linksArray = [].slice.call(links);

    return linksArray;
}

function changeLinkRef(link) {
    'use strict';
    // Sets the value of the href tag to a '#' to do nothing
    return link.setAttribute('href', "#");
}

function hijackLink(link) {
    'use strict';
    // When user clicks the link, it will prevent default action and trigger our own action
    link.addEventListener('click', function(event) {
        event.preventDefault();
        changeLinkRef(link);
    })
}

function initializeEvents() {
    'use strict';
    // Retrieves the links
    var links = getLinksArray();
    // Hijacks the links to do nothing
    links.forEach(hijackLink);
}

initializeEvents();
