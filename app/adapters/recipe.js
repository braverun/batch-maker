import ajax from 'ic-ajax';
import Ember from 'ember';


// Recipe: reverse id -> objectId for POST/PUT

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
  },

  findQuery: function(name, query) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Bookmark", {
      data: Ember.$.param({
              where: JSON.stringify(query)
            })
    }).then(function(response){
      return response.results.map(function(bookmark) {
        bookmark.id = bookmark.objectId;
        delete bookmark.objectId;
        return bookmark;
      });
    });
  },

  destroy: function(name, record) {
    /* jshint unused: false */
    return ajax({
      url: "https://api.parse.com/1/classes/Bookmark/" + record.id,
      type: "DELETE"
    });
  },

  save: function(name, record) {
    /* jshint unused: false */
    if(record.id) {
      return ajax({
        url: "https://api.parse.com/1/classes/Recipes/" + record.id,
        type: "PUT",
        data: JSON.stringify(record)
      }).then(function(response) {
        response.id = response.objectId;
        delete response.objectId;
        return response;
      });
    } else {
      return ajax({
        url: "https://api.parse.com/1/classes/Recipes",
        type: "POST",
        data: JSON.stringify(record)
      }).then(function(response) {
        record.updatedAt = response.updatedAt;
        return record;
      });
    }
  }


});
