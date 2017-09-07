var VideoListView = Backbone.View.extend({
  
  //el: '.video-list',

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },  

  render: function() {
    this.$el.children().detach();
    
    this.collection.forEach(video => {
      var videoListView = new VideoListEntryView({model: video});
     // $(this.el).append(this.template(videoListView.render()));
      var result = this.template((videoListView.render()));
      console.log('result', result);
      //this.$el.html(videoListView.render().el);
    });

   // this.$el.html(this.template({ collection: videoViews }));
    

    return this;
  },

  template: templateURL('src/templates/videoList.html')
    

});