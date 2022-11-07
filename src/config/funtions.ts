import { ApiRequestInterface } from "../interfaces/genericApiRequestInterface/genericApiRequestInterface";
import ApiIAnime from "../services/apiAnimes";

export const baseUrl = "play-api.php";

export const genericApiRequest = async ({
  restLink,
  dataBase,
}: ApiRequestInterface) => {
  return await ApiIAnime.get(`/${baseUrl}${restLink}`).then((res) => {
    dataBase(res.data);
  });
};
