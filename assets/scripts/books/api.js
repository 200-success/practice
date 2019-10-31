'use strict'
const config = require('../config')
const store = require('../store')

const getBooks = function (events) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/books/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBooks
}
