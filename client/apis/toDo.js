import request from 'superagent'

const rootUrl = '/api/v1'

export function getToDos() {
  return request.get(rootUrl + '/todos').then((res) => {
    return res.body.todos
  })
}

export function addToDo(item) {
  return request
    .post(rootUrl + '/todos')
    .send({
      item: item,
      completed: false,
    })
    .then((res) => res.body)
}
