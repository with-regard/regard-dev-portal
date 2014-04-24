var App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://website-api.withregard.io',
  namespace: 'v1'
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});