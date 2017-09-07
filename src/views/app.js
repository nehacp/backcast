var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(list) {
    this.videos = new Videos(list);
    this.render();
    this.videoPlayerView = new VideoPlayerView({el: this.$('.player'), collection: this.videos});
    this.videoListView = new VideoListView({el: this.$('.list'), collection: this.videos});

    this.videoListView.render();
    this.videoPlayerView.render();
    //$(this.el).append(this.render());
  },


  render: function() {
    this.$el.html(this.template());
    //$('.player').append(this.videoPlayerView.render().el);
    //$('.list').append(this.videoListView.render().el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
