import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
        return {};
},
actions: {
    createPost(params) {
      let post = this.store.createRecord('post', params);
      post.save();
    }
  }
});
