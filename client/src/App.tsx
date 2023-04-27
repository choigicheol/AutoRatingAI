import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { StoreData } from "./interface/interface";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import { BodyContainer } from "./styles/commonStyles";

function App() {
  const [selectStore, setSelectStore] = useState<StoreData | null>(null);

  const getSelectStore = (store: StoreData) => {
    setSelectStore(store);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <BodyContainer>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<MainPage getSelectStore={getSelectStore} />}
            />
            <Route
              path="/review"
              element={
                <ReviewPage
                  getSelectStore={getSelectStore}
                  selectStore={selectStore}
                />
              }
            />
          </Routes>
          <Footer />
        </BodyContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
