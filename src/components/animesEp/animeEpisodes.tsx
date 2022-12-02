import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  existOvaEp,
  verifyOvaOrEpecial,
} from "../../config/episodesFunctions";
import { AnimeEpisodesListInterface } from "../../interfaces/animesComponentsInterface/animesCarouselInterface";
import { DivInputEplist, EpConteiner, EpItem, InputEpList } from "./styled";
import { BiSearchAlt } from "react-icons/bi";

export const AnimeEpisodesList = ({
  episodesListSpecial,
  episodesList,
  setType,
  search, 
  setSearch
}: AnimeEpisodesListInterface) => {
  const navigate = useNavigate();
 

  return (
    <EpConteiner>
      <div>
        <h2>Lista Episodios</h2>
        <DivInputEplist>
          <InputEpList onSubmit={(e) => e.preventDefault()}>
            <div className="conteiner-input">
              <input
                type="text"
                placeholder="Pesquisar..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button className="button-eplist">
                <BiSearchAlt />
              </button>
            </div>
          </InputEpList>

          <button
            onClick={() => {
              setType("asc");
            }}
            className="button-aling-list"
          >
            Crescente
          </button>
          <button
            onClick={() => {
              setType("desc");
            }}
            className="button-aling-list"
          >
            Decrescente
          </button>
        </DivInputEplist>

        {episodesList.length !== undefined && (
          <EpItem>
            {search.length == 0
              ? episodesList.map((elem) => {
                  return (
                    !verifyOvaOrEpecial(elem.title) && (
                      <li
                        style={{ color: "white" }}
                        onClick={() => {
                          navigate(
                            `/anime/episode/${elem.video_id}/${elem.category_id}`
                          );
                        }}
                      >
                        <h4>{elem.title}</h4>
                      </li>
                    )
                  );
                })
              : episodesList.map((elem) => {
                  return (
                    elem.title.includes(search) &&
                    !verifyOvaOrEpecial(elem.title) && (
                      <li
                        style={{ color: "white" }}
                        onClick={() => {
                          navigate(
                            `/anime/episode/${elem.video_id}/${elem.category_id}`
                          );
                        }}
                      >
                        <h4>{elem.title}</h4>
                      </li>
                    )
                  );
                })}
          </EpItem>
        )}
      </div>
      {existOvaEp(episodesListSpecial) && (
        <div>
          <h2>Lista de Ovas</h2>
          {episodesList.length !== undefined && (
            <EpItem>
              {episodesListSpecial.map((elem) => {
                return (
                  <li
                    style={{ color: "white" }}
                    onClick={() => {
                      navigate(
                        `/anime/episode/${elem.video_id}/${elem.category_id}`
                      );
                    }}
                  >
                    <h4>{elem.title}</h4>
                  </li>
                );
              })}
            </EpItem>
          )}
        </div>
      )}
    </EpConteiner>
  );
};
