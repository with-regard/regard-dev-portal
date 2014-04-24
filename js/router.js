App.Router.map(function () {
  this.resource('projects', {path: '/'}, function(){
    this.resource('project', {path: '/project/:project_id'});
    this.resource('investigation', {path: '/project/:project_id/:investigation_id'})  
  });
});

App.ProjectsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('project');
  }
});

App.ProjectRoute = Ember.Route.extend({
  model: function(params) {
    var result = this.store.find('project', params.project_id);
    result.then(function(res){
      console.log(res);
    })
    return result;
  }
});