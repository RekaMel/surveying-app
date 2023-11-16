// View

var myview = new ol.View({
  center: [1807475.013249523, 6075025.259338098],
  zoom: 14,
});

//OSM Layer
var baseLayer = new ol.layer.Tile({
  source: new ol.source.OSM({
    attributions: "Surveyor Application",
  }),
});

// Layer Array
var layerArray = [baseLayer];

//Map
var map = new ol.Map({
  target: "mymap",
  view: myview,
  layers: layerArray,
});
