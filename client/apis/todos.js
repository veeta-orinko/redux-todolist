import request from 'superagent'

const rootUrl = '/api/v1'

export function getToDos() {
  return request.get(rootUrl + '/todos').then((res) => {
    return res.body.todos
  })
}
