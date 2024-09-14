import axios from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const fetchUserDataById = (id) => {
  return axios.get(`http://localhost:4000/superheroes?id=${id}`);
};

const RQSuperheroPage = () => {
  const [searchParams] = useSearchParams();
  const heroId = searchParams.get("heroId");

  const { data } = useQuery(
    ["super-hero-by-id", heroId],
    () => fetchUserDataById(heroId),
    {
      select: (data) => {
        return data.data.map((val) => {
          return {
            id: val.id,
            name: val.name,
          };
        });
      },
    }
  );

  return (
    <div>
      RQSuperheroPage
      <h4>{data?.[0]["name"]}</h4>
    </div>
  );
};

export default RQSuperheroPage;
