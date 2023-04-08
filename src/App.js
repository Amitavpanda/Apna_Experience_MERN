import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import styles from "./App.module.scss";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className="Dashboard">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
