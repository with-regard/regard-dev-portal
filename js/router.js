App.Router.map(function () {
  // put your routes here
  this.resource('projects', {path: '/'}, function() {
      this.resource('project', {path: ':project_id' });
  });
});

App.ProjectsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('project');
  }
});