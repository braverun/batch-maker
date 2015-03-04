import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		saveRecipe: function() {
			var recipeName = this.get('recipeName');
			var chefName = this.get('chefName');
			var recipeType = this.get('recipeType');

			var prepTime = this.get('prepTime');
			var cookTime = this.get('cookTime');
			var cookTemp = this.get('cookTemp');
			var recipeYield = this.get('recipeYield');
			var recipeProduct = this.get('recipeProduct');
			var ingredientAmount = this.get('ingredientAmount');
			var ingredientType = this.get('ingredientType');
			var directions = this.get('directions');
			var chefNotes = this.get('chefNotes');
			console.log(recipeName, chefName, recipeType, prepTime, cookTime, cookTemp, recipeYield,
				recipeProduct, ingredientAmount, ingredientType, directions, chefNotes);
		}
	}

});
