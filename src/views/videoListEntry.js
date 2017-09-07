var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.$el.on('click', this.model.select.bind(this));
  },  

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
