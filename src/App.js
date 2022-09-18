import './App.css';
import LandingPage from './components/landing/landing-page';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation/>
      </header>
      <main>
        <LandingPage/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
