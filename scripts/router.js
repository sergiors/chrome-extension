define([
  "backbone",
  "react",
  "views/hello",
  "views/reports"
], function(Backbone, React, Hello, Reports) {
  "use strict";
  
  var aa = document.querySelector("#test");
  
  return Backbone.Router.extend({
    routes: {
      "": function() {
        React.renderComponent(Hello(), aa);
      },
      "reports": function() {
        React.renderComponent(Reports(), aa);
      }
    },
  });
  
});