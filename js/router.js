App.Router.map(function () {
  // put your routes here
  this.resource('projects', {path: '/'}, function() {
      this.resource('project', { path: ':project_id' }, function() {
        this.resource('investigations', function() {
          this.resource('investigation', { path: ':investigation_id' });
        });
      });
  });
});

App.ProjectsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('project');
  }
});

App.InvestigationsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('investigation');
  }
})