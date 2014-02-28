/* 
 *  js/views/edit_todo_view.js
 */
 Todos.EditTodoWiew = Ember.TextField.extend({
   didInsertElement: function() {
     this.$().focus();
   }
 });
 
 Ember.Handlebars.helper('edit-todo', Todos.EditTodoWiew);
 
 
