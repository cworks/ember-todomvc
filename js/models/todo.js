/*
 * Model classes that describe our Domain
 * Create a new class Todo and place within our applications namespace
 */
Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
	{
		id : 1,
		title : 'Learning Ember.js',
		isCompleted : true
	},
	{
		id : 2,
		title : '...',
		isCompleted : false
	},
	{
		id : 3,
		title : 'Profit!',
		isCompleted : false
	}
];