    ymaps.ready(init);
    var myMap;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [59.91817154, 30.30557800],
            zoom: 11,
            controls: []
        });

        myMap.behaviors.disable('scrollZoom');

    var coords = [
    [59.97307978, 30.31141449], 
    [59.94582653, 30.37956405], 
    [59.91503414, 30.49131561],
    [59.89045946, 30.31604215]
],
    myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-26, -52]
    });

for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
}

myMap.geoObjects.add(myCollection);
}