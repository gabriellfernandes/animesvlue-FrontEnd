import { SubHeaderUl } from "../../../pages/home/styled";

export const SubHeader = () => {
  const ABC = [
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <SubHeaderUl>
      {ABC.map((elem) => {
        return <li>{elem}</li>;
      })}
    </SubHeaderUl>
  );
};
