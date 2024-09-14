import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(axios.get("http://localhost:4000/superheroes"));
    //     }, 2000);
    //   });
};

export const useSuperheroesData = () => {
    return useQuery(
        "super-heroes",
        fetchSuperHeroes,
        {
            select: (data) => {
                const superHeroes = data.data.map((hero) => {
                    return {
                        id: hero.id,
                        name: hero.name,
                    };
                });

                return superHeroes;
            },
        });
}