/*
 * Create a new Ember application instance and make it 
 * available as a variable named Todos within the browsers
 * JavaScript environment.
 */
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});

