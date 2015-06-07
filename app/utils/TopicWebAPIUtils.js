var $ = require('jquery');
var _ = require('lodash');

module.exports = {
  /*
   * @param topic provide a topic object {id: String, count: Number, text: String}
   * @return jqXHR object (which implements the Promise interface)
   */
  addTopic: function(topic) {
    return $.ajax({
      url: '/topic',
      data: JSON.stringify(topic),
      type: 'POST',
      contentType: 'application/json'
    });
  },

  /*
   * @param Object - partial topic or id
   * @param Boolean - if this is a full update then we have to specify it
   * @param Boolean - true if increment, false if decrement
   */
  updateTopic: function(topic, isFull, isIncrement) {
    $.ajax({
      url: '/topic',
      data: JSON.stringify(_.extend(topic, {
        isFull: isFull,
        isIncrement: isIncrement
      })),
      type: 'PUT',
      contentType: 'application/json'
    })
      .then(function(data) {
        console.log(data);
      }, function(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      });
  },

  deleteTopic: function(topic) {
    return $.ajax({
      url: '/topic',
      data: JSON.stringify(topic),
      contentType: 'application/json',
      type: 'DELETE'
    });
  }
};
