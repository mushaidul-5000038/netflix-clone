import Rows from './Components/Rows'
import requests from './requests'
import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Rows title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} imgShowLarge/>
      <Rows title='Trending Movies' fetchUrl={requests.fetchTrending}/>
      <Rows title='Top Rated Movies' fetchUrl={requests.fetchTopRated}/>
      <Rows title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Rows title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Rows title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
