import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Nav from './Components/Nav';
import BannerAd from './Components/Tabs/BannerAd';
import Native from './Components/Tabs/Native';
import PopUnder from './Components/Tabs/PopUnder';
import Skim from './Components/Tabs/Skim';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<PopUnder />} />
            <Route path="bannerAd" element={<BannerAd />} />
            <Route path="native" element={<Native />} />
            <Route path="skim" element={<Skim />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
