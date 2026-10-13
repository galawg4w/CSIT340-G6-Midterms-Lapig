import { useState } from "react";
import NavBar from "./Components/NavBar";
import PlanPicker from "./Components/PlanPicker";
import Waitlist from "./Components/Waitlist";
import Footer from "./Components/Footer";

function App() {
 

  return (
    <>
    <NavBar />
    <PlanPicker />
    <Waitlist />
    <Footer />
    </>
  );
}

export default App;