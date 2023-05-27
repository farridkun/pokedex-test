import { debounce } from "lodash";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const baseUrl = "https://pokeapi.co/api/v2/";

  const intitialState = {
    allPokemon: [],
    pokemon: {},
    pokemonDataBase: [],
    searchResults: [],
    next: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, intitialState);
  const [allPokemonData, setAllPokemonData] = useState([]);

  const allPokemon = async () => {
    dispatch({ type: "LOADING" });

    const res = await fetch(`${baseUrl}pokemon?limit=20`);
    const data = await res.json();
    dispatch({ type: "GET_ALL_POKEMON", payload: data });

    const allPokemonData = [];

    for (const pokemon of data.results) {
      const pokemonRes = await fetch(pokemon.url);
      const pokemonData = await pokemonRes.json();
      allPokemonData.push(pokemonData);
    }

    setAllPokemonData(allPokemonData);
  };

  const getPokemon = async (name) => {
    dispatch({ type: "LOADING" });

    const res = await fetch(`${baseUrl}pokemon/${name}`);
    const data = await res.json();

    dispatch({ type: "GET_POKEMON", payload: data });
  };

  const getPokemonDatabase = async () => {
    dispatch({ type: "LOADING" });

    const res = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    dispatch({ type: "GET_POKEMON_DATABASE", payload: data.results });
  };

  const next = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(state.next);
    const data = await res.json();
    dispatch({ type: "NEXT", payload: data });

    const newPokemonData = [];
    for (const pokemon of data.results) {
      const pokemonRes = await fetch(pokemon.url);
      const pokemonData = await pokemonRes.json();
      newPokemonData.push(pokemonData);
    }

    setAllPokemonData([...allPokemonData, ...newPokemonData]);
  };

  const realTimeSearch = debounce(async (search) => {
    dispatch({ type: "LOADING" });
    const res = state.pokemonDataBase.filter((pokemon) => {
      return pokemon.name.includes(search.toLowerCase());
    });

    dispatch({ type: "GET_SEARCH", payload: res });
  }, 500);

  useEffect(() => {
    getPokemonDatabase();
    allPokemon();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        allPokemonData,
        getPokemon,
        realTimeSearch,
        next,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
