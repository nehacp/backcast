var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(list) {
    this.videos = new Videos(list);
    this.videoPlayerView = new VideoPlayerView({collection: this.videos});
    this.videoListView = new VideoListView({collection: this.videos});
    $(this.el).append(this.render());
  },


  render: function() {
    this.$el.html(this.template( ));
    $('.player').append(this.videoPlayerView.render().el);
    $('.list').append(this.videoListView.render().el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
