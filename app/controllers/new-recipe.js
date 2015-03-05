import Ember from 'ember';

export default Ember.Controller.extend({
    mealType: ["Breakfast", "Lunch", "Dinner", "Dessert"],
    tempDenom: ["F", "C"],
    unitOfMeasure: ["Cups", "Pints", "Lbs", "Oz", "Litres"],
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
			// console.log(recipeName, chefName, recipeType, prepTime, c
			// 	ookTime, cookTemp, recipeYield, recipeProduct, ingredientAmount,
			// 	ingredientType, directions, chefNotes);


		var recipe = {
			recipeName: recipeName,
			chefName: chefName,
			recipeType: recipeType,
			prepTime: prepTime,
			cookTime: cookTime,
			cookTemp: cookTemp,
			recipeYield: recipeYield,
			recipeProduct: recipeProduct,
			ingredientAmount: ingredientAmount,
			ingredientType: ingredientType,
			directions: directions,
			chefNotes: chefNotes

		};


		this.store.save('new-recipe', this.get('model'));

		}
	}
});

