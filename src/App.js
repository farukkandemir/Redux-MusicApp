import Sidebar from "./components/Sidebar";
import {Routes, Route} from "react-router-dom";
import Discover from "./pages/Discover";
import SearchBar from "./components/SearchBar";
import TopPlaces from "./components/TopPlaces";
import TopCharts from "./pages/TopCharts";
import TopArtists from "./pages/TopArtists";

function App() {
  return (
    <main>
      <Sidebar />

      <section className=" bg-gradient-to-br from-black to-[#121286]">
        <SearchBar />

        <div className="grid grid-cols-3 xl:grid-cols-5 gap-4">
          <div className="col-span-2 xl:col-span-3">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/topCharts" element={<TopCharts />} />
              <Route path="/topArtists" element={<TopArtists />} />
            </Routes>
          </div>

          <TopPlaces />
        </div>
      </section>
    </main>
  );
}

export default App;
