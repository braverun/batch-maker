import ajax from 'ic-ajax';
import Ember from 'ember';

// TODO: reverse id -> objectId for POST/PUT

export default Ember.Object.extend({
  find: function(name, id){
    /* jshint unused: false */
    console.log('adapter.find');
    return ajax("https://api.parse.com/1/classes/Recipes/" + id).then(function(recipe){
      recipe.id = recipe.objectId;
      delete recipe.objectId;
      return recipe;
    });
  },

  findAll: function(name) {
    /* jshint unused: false */
    console.log('adapter.findAll');
    return ajax("https://api.parse.com/1/classes/Recipes").then(function(response){
      return response.results.map(function(recipe) {
        recipe.id = recipe.objectId;
        delete recipe.objectId;
        return recipe;
      });
    });
  }
});
