import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Detail from "./components/main/detail";
import { AppProvider } from "./context/Context";

const App = () => {
  
  const basename = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <AppProvider>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/details/:id" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default App;
