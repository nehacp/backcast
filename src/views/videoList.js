var VideoListView = Backbone.View.extend({
  
  // the current $el is '.list',

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },  

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').html('');
    
    this.collection.forEach(this.renderVideos, this);
    return this;
  },  

  renderVideos: function(video) {
    var videoListView = new VideoListEntryView({model: video});
    this.$('.video-list').append(videoListView.render());
  },

  template: templateURL('src/templates/videoList.html')
    

});