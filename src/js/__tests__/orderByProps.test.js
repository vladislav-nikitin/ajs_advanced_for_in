import orderByProps from "../orderByProps";

test("check orderByProps function", () => {
  const sortList = ["name", "level"];
  const expected = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ];
  expect(
    orderByProps(
      { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 },
      sortList
    )
  ).toEqual(expected);
});
