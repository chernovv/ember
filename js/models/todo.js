/* js/model/todo.js
 */
 Todos.Todo = DS.Model.extend({
   title: DS.attr('string'),
   isCompleted: DS.attr('boolean')
 });
 
 Todos.Todo.FIXTURES = [{
   id: '1',
   title: 'First',
   isCompleted: true
 },{
   id: '2',
   title: 'Second',
   isCompleted: true
 },{
   id: '3',
   title: 'Third',
   isCompleted: true
 }];