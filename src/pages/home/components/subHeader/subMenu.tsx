import { useNavigate } from "react-router-dom";
import { SubHeaderUl } from "../../styled";

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
  const navigate = useNavigate()
  return (
    <SubHeaderUl>
      {ABC.map((elem) => {
        return <li onClick={() => navigate(`/seach/${elem}`)}>{elem}</li>;
      })}
    </SubHeaderUl>
  );
};
