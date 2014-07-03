chrome.app.runtime.onLaunched.addListener(function() {
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 1024;
  var height = 768;

  chrome.app.window.create("index.html", {
    id: "helloWorldID",
    bounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth - width)/2),
      top: Math.round((screenHeight - height)/2)
    },
    minWidth: 800,
    minHeight: 600,
  });
});
