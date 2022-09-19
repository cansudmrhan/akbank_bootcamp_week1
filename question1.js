const array = ["Patika", "219", "Akbank", "React", "Bootcamp"];

//  some() returns true or false
Array.prototype.includesCi = function (search) {
  return this.some((item) => item.toLowerCase() === search.toLowerCase());
};

console.log(
  array.includesCi("219") ? "Beklendiği gibi" : "Beklendiği gibi değil"
);

console.log(
  array.includesCi("react") ? "Beklendiği gibi" : "Beklendiği gibi değil"
);

console.log(
  array.includesCi("cansu") ? "Beklendiği gibi" : "Beklendiği gibi değil"
);
