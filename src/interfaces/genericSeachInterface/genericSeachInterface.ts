import { GernesAnimeInterface } from "../animes/generContext"
import { SeachResultsInterface } from "../../interfaces/animes/seachContextInterface";

export interface GenericSeachInterface {
    title: string
    loading : boolean
    list: GernesAnimeInterface[] | SeachResultsInterface[]
}