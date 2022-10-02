import "./App.css";
import Footer from "./components/footer/footer";
import LandingPage from "./components/landing/landingPage";
import Menu from "./components/menu/menu";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <div className="App">
      <header id="home">
        <Navigation/>
      </header>
      <main>
        <LandingPage/>

        <Menu/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
