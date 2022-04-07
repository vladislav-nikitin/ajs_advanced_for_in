export default function orderByProps(obj, sortList) {
  const props = [];
  for (const prop in obj) {
    props.push(prop);
  }
  const arrSort = props.sort().filter((item) => !sortList.includes(item));
  const resultArr = [];
  [...sortList, ...arrSort].forEach((item) => {
    resultArr.push({
      key: item,
      value: obj[item],
    });
  });
  return resultArr;
}

// console.log(orderByProps(
//   { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 },
//   ["name", "level"]
// ))
