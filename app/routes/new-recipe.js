import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
    return this.store.findAll('recipe');
  },

  setupController: function(controller, model){
    controller.set('model', model.recipes);
    // controller.set('users', model.users);
  }
});
