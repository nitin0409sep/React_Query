import { NavLink, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            color: "white",
            padding: "50px",
          }}
        >
          <QueryClientProvider client={queryClient}>
            <div style={{ display: "flex", gap: "30px" }}>
              <NavLink
                to=""
                style={({ isActive }) => ({
                  color: isActive ? "skyblue" : "white",
                  textDecoration: "none",
                  fontWeight: "normal",
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="superHeroes"
                style={({ isActive }) => ({
                  color: isActive ? "skyblue" : "white",
                  textDecoration: "none",
                  fontWeight: "normal",
                })}
              >
                Super Heroes
              </NavLink>
              <NavLink
                to="rqsuperheroesPage"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "skyblue" : "white",
                    textDecoration: "none",
                    fontWeight: "normal",
                  };
                }}
              >
                RQ Super Heroes
              </NavLink>
              <NavLink
                to="parallelQueries"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "skyblue" : "white",
                    textDecoration: "none",
                    fontWeight: "normal",
                  };
                }}
              >
                Parallel Queries
              </NavLink>
              <NavLink
                to="dynamicQueries"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "skyblue" : "white",
                    textDecoration: "none",
                    fontWeight: "normal",
                  };
                }}
              >
                Dynamic Queries
              </NavLink>
              <NavLink
                to="rq-dependent-queries"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "skyblue" : "white",
                    textDecoration: "none",
                    fontWeight: "normal",
                  };
                }}
              >
                Dependent Queries
              </NavLink>
            </div>
            <Outlet></Outlet>
            <ReactQueryDevtools position="bottom-right" />
          </QueryClientProvider>
        </div>
      </>
    </>
  );
}

export default App;
