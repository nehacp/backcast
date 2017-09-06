var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },  

  render: function() {
    
    this.collection.forEach(video => {
      var videoVideo = new VideoListEntryView({model: video});
      videoVideo.render();
    });
    
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
