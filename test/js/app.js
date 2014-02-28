App = Ember.Application.create();

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  dt: DS.attr('date'),
  body: DS.attr('string'),
});

App.Post.FIXTURES = [{
  id: '1',
  title: 'First',
  dt: new Date('2012 04 14'),
  body: 'DS.FixtureAdapter is an adapter that loads records from.'
},{
  id: '2',
  title: 'Second',
  dt: new Date('2009 06 01'),
  body: 'API but are not ready to integrate yet.'
}];

App.Router.map(function() {
  this.resource('posts', function() {
    this.resource('post', {path: ':post_id'});
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id); 
  }
});

App.PostController = Ember.ObjectController.extend({
  isEdit: false,
    edit: function() {
      this.set('isEdit', true);
    },
    doneEdit: function() {
      this.set('isEdit', false);
    }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

var showdown = new Showdown.converter();
Ember.Handlebars.helper('format-text', function(text) {
  
  return new Handlebars.SafeString(showdown.makeHtml(text));
});

