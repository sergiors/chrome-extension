"use strict";

require.config({
  shim: {
    jquery: {
      exports: "$"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: [
        "underscore",
        "jquery"
      ]
    }
  },
  paths: {
    react: "../bower_components/react/react",
    jquery: "../bower_components/jquery/dist/jquery",
    underscore: "../bower_components/underscore/underscore",
    backbone: "../bower_components/backbone/backbone"
  }
});

//var notId = 0;
//window.addEventListener("load", function() {
//  var notify = document.querySelector("#notify");
//
//  notify.addEventListener("click", function() {
//    chrome.notifications.create("id"+notId++, {
//      type: "basic",
//      title: "Hello",
//      message: "Suco de cevadiss",
//      iconUrl: "/images/inbox-64x64.png",
//      priority: 0,
//      expandedMessage: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis."
//    }, function(notId) {
//      debugger;
//      // chrome.notifications.clear(notId);
//    });
//
//  });
//});

require(["backbone", "router"], function(Backbone, Router) {
  new Router();
  Backbone.history.start()
});

