Todos.TodosController = Ember.ArrayController.extend({

	actions: {
		clearCompleted: function() {
			var completed = this.filterBy('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		},
		createTodo: function() {
			// Get the todo title set by the "new-todo" text field
			var title = this.get('newTitle');
			if(!title) {
				return false;
			}
			if(!title.trim()) {
				return;
			}
			// create the new Todo Model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});
			// clear the new-todo text field
			this.set('newTitle', '');
			// save the new model
			todo.save();
		}
	},

	hasCompleted: function() {
		return this.get('completed') > 0;
	}.property('completed'),

	completed: function() {
		return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	remaining: function() {
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function() {
		var remaining = this.get('remaining');
		return remaining === 1 ? ' todo' : ' todos';
	}.property('remaining'),

	allAreDone: function(key, value) {
		if(value === undefined) {
			return !!this.get('length') && this.isEvery('isCompleted');			
		} else {
			this.setEach('isCompleted', value);
			this.invoke('save');
			return value;
		}
	}.property('@each.isCompleted')
});
