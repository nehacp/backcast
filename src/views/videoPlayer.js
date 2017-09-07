var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    
    this.on('selected', this.render, this);

  },

  render: function(video) {
    console.log('I am here');
    console.log(this);
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
