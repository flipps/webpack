export const deleteTask = e => {
  console.log('Delete task...', e);

  let item = e.target.parentNode;
  let list = item.parentNode;

  list.removeChild(item);
}