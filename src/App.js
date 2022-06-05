import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          {/* <Route path="teams" element={<Teams />}>
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
          {/* </Route> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
