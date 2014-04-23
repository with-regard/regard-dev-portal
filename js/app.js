'use strict';

var App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://website-api.withregard.io',
  namespace: 'v1'
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});

App.Project = DS.Model.extend({
  name: DS.attr('string')
});

App.Router.map(function () {
  // put your routes here
  this.route('projects', {
    path: '/'
  });
});

App.ProjectsRoute = Ember.Route.extend({
  model: function () {
    console.log('finding all projects');
    return this.store.find('project');
  }
});


App.ProjectsController = Ember.ArrayController.extend({
  actions: {
    createProject: function() {
        var project = this.store.createRecord('project', {
          name: 'test project'
        });
      
        project.save();
      }
    }
});