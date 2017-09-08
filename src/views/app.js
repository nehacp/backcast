var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search().then(() => {
      this.render();
      this.search = new SearchView({el: this.$('.search'), collection: this.videos});
      this.videoPlayerView = new VideoPlayerView({el: this.$('.player'), collection: this.videos});
      this.videoListView = new VideoListView({el: this.$('.list'), collection: this.videos}); 
      this.search.render();
      this.videoListView.render();
      this.videoPlayerView.render();
    });
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
