const handlerJs = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: handlerJs.addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handlerJs.getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handlerJs.getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handlerJs.editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handlerJs.deleteNoteByIdHandler,
  },
];

module.exports = routes;
