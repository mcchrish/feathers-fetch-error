const app = require('./client')

describe('Client test', () => {
  it('rejects create', () => {
    return app.service('/messages').create({})
      .catch(error => {
        return error.response.json()
      })
      .catch(response => {
        console.log(response)
      })
  })
})
