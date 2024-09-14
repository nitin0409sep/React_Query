import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(axios.get("http://localhost:4000/superheroes"));
  //     }, 2000);
  //   });
};

const RQsuperheroesPage = () => {
  const [startPooling, setStartPooling] = useState(false);

  //   const onSuccess = (data) => {
  //     console.log("Perform side effects after data fetching", data);
  //     if (data.data.length > 4) setStartPooling(false);
  //   };

  //   const onError = (error) => {
  //     console.log("Perform side effects after encountering errors", error);
  //   };

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // staleTime: 10000, // 10 seconds before data becomes stale
      // cacheTime: 30000, // 30 seconds before cache is cleared
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      refetchInterval: startPooling,
      refetchIntervalInBackground: true,
      //   enabled: false, // Stop calling query on component mounting

      //   onSuccess: onSuccess,
      //   onError,

      select: (data) => {
        const superHeroes = data.data.map((hero) => {
          return {
            id: hero.id,
            name: hero.name,
          };
        });

        return superHeroes;
      },
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isFetching) {
    // react-query in background runs and fetch new data
    return <h2>Fetching...</h2>;
  }

  if (isError) {
    return <h1>Oops! Something went wrong. {error?.message}</h1>;
  }

  return (
    <>
      RQsuperheroes
      <button
        style={{
          backgroundColor: "rgba(19,131,231, 10)",
          color: "white",
          padding: "20px",
          borderRadius: "20px",
          fontSize: "15px",
          outline: "none",
          border: "none",
          cursor: "pointer",
        }}
        type="button"
        onClick={(refetch, () => setStartPooling(3000))}
      >
        RQ Fetch Heroes
      </button>
      {data.map((val) => {
        return (
          <h1 key={val.id}>
            <NavLink
              to={`${val.id}?heroId=${val.id}`}
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "skyblue", textDecoration: "none" }}>
                {val.name}
              </span>
            </NavLink>
          </h1>
        );
      })}
    </>
  );
};

export default RQsuperheroesPage;
