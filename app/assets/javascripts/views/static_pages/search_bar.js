BetterNote.Views.SearchBar = Backbone.View.extend({

  tagName: "header",
  className: "search group",
  template: JST['static_pages/search_bar'],

  events: {
    "click button.create-new-note": "createNote"
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  createNote: function(event) {
    event.preventDefault();

    var note = new BetterNote.Models.Note({
      title: "Untitled",
      notebook_id: BetterNote.featuredNotebook.get("id")
    }, { parse: true });
    BetterNote.notes.add(note);

    BetterNote.featuredNotebook.notes.create(note, {
      success: function(note) {
        BetterNote.router.navigate("#/notes/" + note.get("id"))
      }
    });
  }
});