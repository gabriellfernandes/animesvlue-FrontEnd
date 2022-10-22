import { CardAnimeInterface } from "../../interfaces/cardAnimeInterface/cardAnimeInterface"

export const CardAnime = ({title, image}: CardAnimeInterface) => {
    return(
        <div>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    )
}