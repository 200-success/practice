'use strict'
const getBooksHandlebars = require('../templates/getBooks.handlebars')

const onGetBooksSuccess = function (data) {
  $('.resource-view').append(getBooksHandlebars({books: data.books}))
  $('#message').text('Successfully got Books')
}

const onGetBooksFailure = function (data) {
  $('#message').text('Failed to get Books. Please try again.')
}

module.exports = {
  onGetBooksSuccess,
  onGetBooksFailure
}
