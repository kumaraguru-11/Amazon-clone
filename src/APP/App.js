import React, { Suspense } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../FetchingApi/Store";
import { PUBLIC_ROUTES } from "./LazyLoading";
import NavBar from "../Layouts/Navbar";
import ErrorBoundary from "./ErrorBoundry";
import Loading from "../Components/Loading";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
          <ErrorBoundary>
            <Routes>
              {PUBLIC_ROUTES.map((route) => (
                <Route
                  path={route.path}
                  key={route.path}
                  element={
                    <Suspense
                      fallback={
                        <div>
                          <Loading />
                        </div>
                      }
                    >
                      <route.component />
                    </Suspense>
                  }
                />
              ))}
            </Routes>
          </ErrorBoundary>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
