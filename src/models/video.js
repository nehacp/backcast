var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function(event) {
    console.log('in select');
    console.log(this);
    this.trigger('selected', this);
  },

  render: function() {

  }

});
