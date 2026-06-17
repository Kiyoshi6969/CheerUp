import Hero from "./components/Hero.jsx";
import Letter from "./components/Letter.jsx";
import MemoryGallery from "./components/MemoryGallery.jsx";
import BreathingCorner from "./components/BreathingCorner.jsx";
import Closing from "./components/Closing.jsx";
import "./App.css";

export default function App() {
  return (
    <main className="page">
      <Hero />
      <Letter />
      <MemoryGallery />
      <BreathingCorner />
      <Closing />
    </main>
  );
}
