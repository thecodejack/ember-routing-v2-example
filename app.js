window.App = Ember.Application.create({

});

//Views
App.ApplicationView = Ember.View.extend({
    elementId: 'app',
    templateName: 'application'
});

App.SiteView = Ember.View.extend({
    elementId: 'appSite',
    templateName: 'site',
    //template: Ember.Handlebars.compile('<H1>from Site View<H1>'),

});

// ROUTER
App.Router.map(function() {
	this.route("home", { path: "/home" });
	this.route("site",{path:"/site"});
});

App.HomeRoute = Ember.Route.extend({
  renderTemplate: function() {
  	this.render('home',{
  		into: 'application',          // the template to render into
      outlet: 'header'       // the name of the outlet in that template
      //controller: 'blogPost'  // the controller to use for the template
  	});
  }
});

App.SiteRoute = Ember.Route.extend({
  renderTemplate: function() {
  	this.render('site',{
      into: 'application',          // the template to render into
      outlet: 'body'       // the name of the outlet in that template
      //controller: 'blogPost'  // the controller to use for the template
    });
  }
});
