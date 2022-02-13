export const updateObject = function(data, path, value) {
  var pathArray = path.split(">");
  var pointer = data; // points to the current nested object
  for (var i = 0, len = pathArray.length; i < len; i++) {
      var path = pathArray[i];
      if (pointer.hasOwnProperty(path)) {
          if (i === len - 1) { // terminating condition
              pointer[path] = value;
          } else {
              pointer = pointer[path];
          }
      } else {
          // throw error or terminate. The path is incorrect
      }
  }
}