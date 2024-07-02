import { BrowserRouter, Routes , Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function AllRoutes() {
  return (
    <div className="dark:bg-darkbg">
    <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
        
        

    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default AllRoutes