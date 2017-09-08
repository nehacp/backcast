var Videos = Backbone.Collection.extend({

  model: Video,

  search: function (query) {
    const searchPromise = new Promise((resolve, reject) => {
      $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        data: {
          'maxResults': '5', 
          'part': 'snippet', 
          'q': query, 
          'videoEmbeddable': 'true', 
          'key': window.YOUTUBE_API_KEY,
          'type': 'video' 
        },
        success: resolve,
        error: reject
      });
    });

    return searchPromise.then((data) => {
      this.update(data.items);
    }).catch((data => console.log('backcast: Fetch failed', data)));
  },  

  update: function(videos) {
    this.reset();
    videos.forEach(video => this.add(new Video(video)));
  }

});
