App = Ember.Application.create();

App.Router.map(function() {
  
});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Index = DS.Model.extend({
  pos: DS.attr('boolean'),
  title: DS.attr('string'),
  time: DS.attr('number'),
  text: DS.attr('string')
});

App.Index.FIXTURES = [{
  id: '1',
  pos: false,
  title: 'first',
  time: 250,
  text: 'DS.attr defines an attribute on a DS.Model. By default, attribute'
}];

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('index', 1);
  }
});

