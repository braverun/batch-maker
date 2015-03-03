import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		saveRecipe: function() {
			var notes = this.get('personalNotes');
			console.log(notes);
		}
	}

});
