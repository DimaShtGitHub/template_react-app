import { FunctionComponent, Suspense } from "react";
import { Counter } from "./components/Counter";
import "./index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage_async";
import { MainPageAsync } from "./pages/MainPage/MainPage_async";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
