'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onGetBooks = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getBooks(formData)
    .then(ui.onGetBooksSuccess)
    .catch(ui.onGetBooksFailure)
}

module.exports = {
  onGetBooks
}
