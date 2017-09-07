var VideoPlayerView = Backbone.View.extend({
  

  initialize: function() {
    
    this.collection.on('select', (e) => this.render(e));

  },

  render: function(video = this.collection.at(0)) {
    this.$el.html(this.template(video.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
