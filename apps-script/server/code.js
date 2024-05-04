function doGet(request) {
  // Read the content of the index.html file
  var template = HtmlService.createTemplateFromFile("client/index.html");
  template.app = app;

  // Set the content type of the response
  return template
    .evaluate()
    .setTitle("REACT APP")
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
