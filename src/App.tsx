import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ManageCookieModal from "./components/desktop/ManageCookieModal";
import SettingCookieModal from "./components/desktop/SettingCookieModal";

import Home from './pages/Home'
import Main from './pages/Main'
import AboutUs from './pages/AboutUs'
import Product from './pages/Product'
import FollowUp from './pages/FollowUp'
import CookiePolicy from './pages/CookiePolicy'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermofUse"
import HouseRules from './pages/HouseRules'

function App() {
  const [showManageModal, setShowManageModal] = useState(false);

  const openManageModal = (closed: boolean) => {
    setShowManageModal(closed);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opt-in" element={<Main />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/products' element={<Product />} />
          <Route path='/follow-up' element={<FollowUp />} />
          <Route path='/cookie-policy' element={<CookiePolicy />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-of-use' element={<TermsOfUse />} />
          <Route path='/houserules' element={<HouseRules />} />
        </Routes>
        <SettingCookieModal
          opened={true}
          openManageModal={(closed: boolean) => openManageModal(closed)}
        />
        <ManageCookieModal opened={showManageModal} />
      </BrowserRouter>
    </>
  );
}

export default App;
