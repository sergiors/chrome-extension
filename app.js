var notId = 0;

window.addEventListener("load", function() {
  var notify = document.querySelector("#notify");

  notify.addEventListener("click", function() {
    chrome.notifications.create("id"+notId++, {
      type: "basic",
      title: "Hello",
      message: "Suco de cevadiss",
      iconUrl: "/images/inbox-64x64.png",
      priority: 0,
      expandedMessage: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis."
    }, function(notId) {
      debugger;
      // chrome.notifications.clear(notId);
    });

  });

});