const notes = [
  {
    id: 1,
    body: 'tes',
  },
  {
    id: 2,
    body: 'tes2',
  },
];
const index = notes.findIndex((note) => note.id === 2);
if (index !== -1) {
  notes.splice(index, 1);
  console.log(notes);
}
