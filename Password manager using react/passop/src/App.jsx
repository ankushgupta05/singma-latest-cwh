import "./App.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh]">
        <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App;


/* 
install react-toastify

https://github.com/fkhadra/react-toastify
https://fkhadra.github.io/react-toastify/introduction/


install uuid 
https://www.npmjs.com/package/uuid

*/