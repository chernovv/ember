/* /model/todo.js
 */
Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
})

// ... additional lines truncated for brevity ...
Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'first',
   isCompleted: true
 },
 {
   id: 2,
   title: 'second',
   isCompleted: 0
 },
 {
   id: 3,
   title: 'third',
   isCompleted: false
 }
];