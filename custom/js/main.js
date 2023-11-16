//Custom Control

/**
 * Define a namespace for the application.
 */
window.app = {};
var app = window.app;

//
// Define rotate to north control.
//

/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {Object=} opt_options Control options.
 */
app.DrawingApp = function (opt_options) {
  var options = opt_options || {};

  var button = document.createElement("button");
  button.innerHTML = "N";

  var this_ = this;
  var startStopApp = function () {
    //this_.getMap().getView().setRotation(0);
    alert("You clicked control");
  };

  button.addEventListener("click", startStopApp, false);
  button.addEventListener("touchstart", startStopApp, false);

  var element = document.createElement("div");
  element.className = "draw-app ol-unselectable ol-control";
  element.appendChild(button);

  ol.control.Control.call(this, {
    element: element,
    target: options.target,
  });
};
ol.inherits(app.DrawingApp, ol.control.Control);

//
// Create map, giving it a rotate to north control.
//

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
  controls: ol.control
    .defaults({
      attributionOptions: {
        collapsible: false,
      },
    })
    .extend([new app.DrawingApp()]),

  target: "mymap",
  view: myview,
  layers: layerArray,
});
