import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/common/container";
import NavBar from "./components/ui/NavBar";
import routes from "./routes";
import { QualitiesProvider } from "./hooks/useQualities";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    return <Route path={prop.path} component={prop.component} key={key} />;
  });
};
// const QualitiesLoading = ({ children }) => {
//   const { isLoading } = useQualities();
//   if (!isLoading) {
//     return children;
//   }
//   return <h1>Loading...</h1>;
// };

function App() {
  return (
    <div className="App">
      <NavBar routes={routes} />
      <QualitiesProvider>
        {/* <QualitiesLoading> */}
        <Container>
          <Switch>
            {getRoutes(routes)}
            <Redirect to="/" />
          </Switch>
        </Container>
        {/* </QualitiesLoading> */}
      </QualitiesProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
