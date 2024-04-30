import styles from '../src/components/style/header.module.css';
import { Routes, Route } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeState } from "../src/atoms/darkMode";
import { searchListOpen } from '../src/atoms/searchListOpen';
import Header from "../src/components/Header";
import Dashboard from "../src/pages/Dashboard";
import CategoryPage from "../src/pages/CategoryPage";
import ErrorPage from "../src/pages/ErrorPage";
import Footer from "../src/components/Footer";
import ProductPage from "../src/pages/ProductPage";
import ShoppingCart from "../src/components/ShoppingCart";
import ScrollToTop from "../src/components/ScrollRestoration";

function App() {
  const isDarkMode = useRecoilValue(darkModeState);
  const setIsSearchListOpen = useSetRecoilState(searchListOpen);

  const searchListClose = (e) => {
    if (e.target.classList.contains(styles.searchBox) || e.target.classList.contains(styles.searchList)) return;
    setIsSearchListOpen(false);
  }

  return (
    <>
      <div className={isDarkMode ? "App_dark" : "App_light"} onClick={searchListClose} >
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;