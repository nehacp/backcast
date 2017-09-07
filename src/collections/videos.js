var Videos = Backbone.Collection.extend({

  model: Video,

  search: function (query) {
    var results;
    const searchPromise = new Promise((resolve, reject) => {
      $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        data: query,
        success: resolve,
        error: reject
      });
    });

    return searchPromise.then((data) => {
      this.update(data.items);
    });
//.catch((data => console.log('backcast: Fetch failed', data)));
  },
  

  update: function(videos) {
    console.log('update function');
    this.reset();
    videos.forEach(video => this.add(new Video(video)));
    console.log('updated videos', this);
  }

});
