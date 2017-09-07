var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'handleClick',
    'submit .form-control': 'handleClick'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleClick: function (event) {
    event.preventDefault();
    let input = {
      'maxResults': '5',    
      'q': this.$('input').val(),
      'key': window.YOUTUBE_API_KEY,
      'part': 'snippet',
      'videoEmbeddable': 'true', 
      'type': 'video'
    };
    this.$('input').val('');
    this.collection.search(input);
    
  },
  

  template: templateURL('src/templates/search.html')

});
