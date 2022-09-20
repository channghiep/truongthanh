import "./App.css";
import Footer from "./components/footer/footer";
import LandingPage from "./components/landing/landingPage";
import Menu from "./components/menu/menu";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation/>
      </header>
      <main>
        <LandingPage/>
        <h2>Menu</h2>
        <Menu/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
