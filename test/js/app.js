App = Ember.Application.create();

App.Router.map(function() {
   this.resource('about');
   this.resource('posts', function() {
       this.resource('post', { path: ':post_id' });
   });
});

var posts = [{
    id: '1',
    author: {name: 'First'},
    dt: new Date('2013 9 13'),
    body: 'I want this for my ORM, I want that for my template language, and' 
},{
    id: '2',
    author: {name: 'Second'},
    dt: new Date('2012 3 9'),
    body: 'A long list of topics were raised and I took a time to'
}];

App.PostsRoute = Ember.Route.extend({
    model: function() {
        return posts;
    }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
    isEditing: false,
    
    actions: {
        edit: function() {
            this.set('isEditing', true);
        },
        editDone: function() {
            this.set('isEditing', false);
        }
    }
});








