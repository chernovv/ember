/*window.Ember.Application.create.console.log.
*/
window.Todos = Ember.Application.create();


Todos.ApplicationController = Ember.Controller.extend({
  firstName: "Trek",
  lastName: "Glowacki",
  
  say: function () {
	console.log(this.get('firstName')+' '+this.get('lastName'));
  }
});
var x = Todos.ApplicationController.create();
x.say();

var firstName = x.get('firstName');
alert(firstName)








