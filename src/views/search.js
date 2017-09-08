var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'handleClick',
    'keyup .form-control': 'handleKeypress'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleClick: function (event) {
    this.collection.search(this.$('input').val());
    this.$('input').val('');
  },

  handleKeypress: function(e) {
    this.collection.search(this.$('input').val());
    if (e.keyCode === 13) {
      e.preventDefault();
      this.$('input').val('');
    }
  },
  
  template: templateURL('src/templates/search.html')

});
