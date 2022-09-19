const input = {
  cols: ["Name Surname", "Company", "Email", "Date", "Country", "City"],
  data: [
    [
      "Hyacinth Vincent",
      "Duis Corporation",
      "iaculis.enim@magnaCrasconvallis.ca",
      "28/06/2022",
      "Eritrea",
      "Lyubertsy",
    ],
    [
      "Brenden Martinez",
      "Volutpat Nunc Associates",
      "iaculis@estMauris.org",
      "24/03/2021",
      "British Indian Ocean Territory",
      "Colwood",
    ],
  ],
};

//solution with map()
function transformData({ cols, data }) {
  var arrayNew = [];

  for (let j = 0; j < data.length; j++) {
    const obj = {};
    cols.map((el, i) => {
      obj[cols[i]] = data[j][i];
    });
    arrayNew.push(obj);
  }
  return arrayNew;
}
console.log(transformData(input));

//solution with reduce()
/* function transformData({ cols, data }) {
  return data.reduce((acc, item) => {
    const object = {};
    item.forEach((value, index) => {
      object[cols[index]] = value;
    });
    acc.push(object);
    return acc;
  }, []);
}
console.log(transformData(input)); */
