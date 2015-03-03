import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		saveRecipe: function() {
			var notes = this.get('personalNotes');
			var recipeName = this.get('recipeName');
			console.log(notes);
			console.log(recipeName);
		}
	}

});
