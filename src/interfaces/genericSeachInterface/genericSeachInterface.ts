import { GernesAnimeInterface } from "../animes/generContext"
import { InputResultsInterface } from "../animesContextInterface/animeContextInterface"

export interface GenericSeachInterface {
    title: string
    loading : boolean
    list: GernesAnimeInterface[] | InputResultsInterface[]
}