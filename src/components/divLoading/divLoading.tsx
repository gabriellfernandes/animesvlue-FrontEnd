import { DivLoadingInterface } from "../../interfaces/divLoadingInterface/divLoadingInterface";
import { DivLoadingStyled } from "./styled";

export const DivLoading = ({ image }: DivLoadingInterface) => {
  return (
    <DivLoadingStyled>
      {!image ? (
        <>
          <p>Carregando...</p>
          <img
            src="https://pa1.narvii.com/6618/579af2d8df43ca612e38b09a103bcde82b7d92aa_hq.gif"
            alt="loading"
          />
        </>
      ) : (
        <>
          <p>Infelizmente Não encontramos um anime com esse nome.</p>
          <img src={image} alt="loading" />
        </>
      )}
    </DivLoadingStyled>
  );
};
