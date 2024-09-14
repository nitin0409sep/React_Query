import { useState, useEffect } from "react";

const SuperHeroesPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:4000/superheroes");
        const value = await res.json();

        setData(value);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>SuperHeroes Names</h2>
      {data.map((val) => {
        return <h2 key={val.id}>{val.name}</h2>;
      })}
    </div>
  );
};

export default SuperHeroesPage;
