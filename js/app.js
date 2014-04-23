'use strict';

var App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'https://regard-website-api.azurewebsites.net',
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