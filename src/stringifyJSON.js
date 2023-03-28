// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// I: any object
// O: string of input object
// C:
// E:

// Strategy: Get type of obj argument. Follow steps for each type to convert obj to string. Use recursion
// to address arrays and objects.

// PseudoCode:
// declare objString variable
// Test typeof obj
// If typeof obj === Number --> use toString()
// If typeof obj === String --> append to objString
// If typeof obj === boolean
//  if true, append "true"
//  else append "false"



var stringifyJSON = function(obj) {
  var objString = '';

  if (typeof obj === 'number') {
    objString += obj.toString();
  }

  if (typeof obj === 'string') {
    objString += '"' + obj + '"';
  }

  if (typeof obj === 'boolean') {
    obj ? objString += 'true' : objString += 'false';
  }

  if (obj === null) {
    objString += 'null';
  }

  if (Array.isArray(obj)) {
    objString += '[';
    obj.forEach(function (item, index, collection) {
      objString += stringifyJSON(item);
      if (!(index === collection.length - 1)) {
        objString += ',';
      }
    });
    objString += ']';
  }

  if (typeof obj === 'object') {
    objString += '{';
    var _keys = Object.keys(obj);
    _keys.forEach(function(key, index, collection) {
      objString += key + ':';
      objString += stringifyJSON(obj[key]);
      if (!(index === collection.length - 1)) {
        objString += ',';
      }
    });
    objString += '}';
  }

  return objString;
};
