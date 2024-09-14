import axios from "axios";
import { useQuery } from "react-query";

const ParallelQueriesPage = () => {
  const fetchSuperHeroes = () => {
    return axios.get(`http://localhost:4000/superheroes`);
  };
  const fetchFriends = () => {
    return axios.get(`http://localhost:4000/friends`);
  };

  const { data: superheroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  console.log({ superheroes });
  console.log({ friends });

  return <div>ParallelQueriesPage</div>;
};

export default ParallelQueriesPage;
