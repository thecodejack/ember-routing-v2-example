window.App = Ember.Application.create();

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

App.PostsIndexView = Ember.View.extend({
     elementId: 'appPostsIndex',
    templateName: 'posts/index'
});

App.PostsNewView = Ember.View.extend({
     elementId: 'appPostsNew',
    templateName: 'posts/new'
});

// ROUTER
App.Router.map(function() {
	this.route("home", { path: "/home" });
	this.route("site",{path:"/site"});
  this.resource("posts",function(){
    this.route("new", { path: "/new" });
  });
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


App.PostsIndexRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('postsIndex',{
      into: 'application',          // the template to render into
      outlet: 'body'       // the name of the outlet in that template
      //controller: 'blogPost'  // the controller to use for the template
    });
  }
});

App.PostsNewRoute = Ember.Route.extend({
  enter: function(router) {
    console.log("Entered PostsNew Route");
  },
  renderTemplate: function() {
    this.render('postsNew',{
      into: 'application',          // the template to render into
      outlet: 'navBar'       // the name of the outlet in that template
      //controller: 'blogPost'  // the controller to use for the template
    });
  }
});







