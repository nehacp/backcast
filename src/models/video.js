var Video = Backbone.Model.extend({

  events: {
    select: 'select'    
  },

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  },

  render: function() {

  }

});
