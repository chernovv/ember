/* js/model/todo.js
 */
Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
})

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'first',
   isCompleted: true
 },
 {
   id: 2,
   title: 'second',
   isCompleted: false
 },
 {
   id: 3,
   title: 'third',
   isCompleted: false
 }
];