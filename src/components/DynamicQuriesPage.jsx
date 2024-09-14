import { useQueries } from "react-query";
import axios from "axios";

const DynamicQuiresPage = () => {
  const fetchSuperHeroes = (id) => {
    // closure (() => axios.get(...))
    return () => axios.get(`http://localhost:4000/superheroes?id=${id}`);
  };

  const userIds = [1, 2, 3];
  const results = useQueries(
    userIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: fetchSuperHeroes(id), // Passing the fetching function
      };
    })
  );

  console.log(results);

  return <div>DynamicQuiresPage</div>;
};

export default DynamicQuiresPage;
