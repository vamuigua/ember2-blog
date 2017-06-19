import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        createdDate: new Date()
      };
      // Clear each input field
      this.set('title', null);
      this.set('author', null);
      this.set('text', null);

      this.sendAction('createPost', params);
    }
  }
});
