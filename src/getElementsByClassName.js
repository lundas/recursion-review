// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Inputs: className as a string
// Outputs: array of elements with className as class
// Constraints:
// Edge Cases: look out for text in spans

// Strategy: Declare an empty collection array. For each element in DOM tree, we need to check for
// a class of className. If so, push to collection array. Check if element has children. If so,
// recurse over all children. Return collection array. Make sure to accountn for migration of recursive
// array elements across execution contexts.


var getElementsByClassName = function(className, element) {
  if (arguments.length < 2) {
    element = document.body;
  }

  // 1. Declare empty collection array
  var elements = [];

  // base case
  if (element.classList.contains(className)) {
    elements.push(element);
  }

  if (element.children) {
    var children = element.children;
    //iterate over children
    for (var i = 0; i < children.length; i++) {
      // recursively call on each child
      var childList = getElementsByClassName(className, children[i]);
      childList.forEach(function (child) {
        elements.push(child);
      });
    }
  }


  // n. return collection array
  return elements;

};
