import Header from "./components/header";
import About from "./components/about";
import Interests from "./components/intererts";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App bg-black/90 w-96 rounded-lg">
      <Header />
      <div className="px-8 py-8">
        <About />
        <Interests />
      </div>
      <div className="bg-black/30 px-14 py-6">
        <Footer />
      </div>
    </div>
  );
}

export default App;
