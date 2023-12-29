import Navbar from "./componets/Navabar/Navbar";
import "./App.css";
import ContactUs from "./componets/Navabar/ContactUs/ContactUs";
import ContactForm from "./componets/ContactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactUs />
      <ContactForm />
    </div>
  );
}

export default App;
