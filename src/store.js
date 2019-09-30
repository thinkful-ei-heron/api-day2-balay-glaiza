/* eslint-disable no-console */
//import item from './item';
const items = [];
let hideCheckeditems = false;
let error = null;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  // try {
  //   item.validateName(name);
  //   this.items.push(item.create(name));
  // } catch (e) {
  //   console.log(e.message);
  // }

  this.items.push(item);
};

const findAndUpdate = function(id, newData) {
  let currItem = this.items.find(item => item.id === id);
  Object.assign(currItem, newData);
};

// const findAndToggleChecked = function (id) {
//   const currentItem = this.findById(id);
//   currentItem.checked = !currentItem.checked;
// };

// const findAndUpdateName = function (id, name) {
//   try {
//     item.validateName(name);
//     const currentItem = this.findById(id);
//     currentItem.name = name;
//   } catch (e) {
//     console.log('Cannot update name: ' + e.message);
//   }
// };

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const setError = function(message) {
  this.error = message;
}

export default {
  error,
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter,
  setError
};