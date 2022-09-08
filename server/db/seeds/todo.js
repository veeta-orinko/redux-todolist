exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todo')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        { id: 1, item: 'grocery shop', completed: true },
        { id: 2, item: 'braid cats hair', completed: false },
        { id: 3, item: 'feed cat', completed: false },
      ])
    })
}
