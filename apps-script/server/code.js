// Compiled using react and typescript plugins∑
var exports = exports || {};
var module = module || { exports: exports };
("use strict");
Object.defineProperty(exports, "__esModule", { value: true });
exports.doGet = void 0;

function doGet(request) {
  // Read the content of the index.html file
  var template = HtmlService.createTemplateFromFile("client/index.html");
  template.app = app;

  // Set the content type of the response
  return template
    .evaluate()
    .setTitle("REACT APPS SCRIPT")
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

exports.doGet = doGet; // Expose the doGet function to the global scope
