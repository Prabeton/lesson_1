import { createRoot } from "react-dom/client";
import GreetingCard from './components/GreetingCard';
import './App.css';

const App = () => {

  return (
    <div className="app">
      <h1>React Lesson One</h1>
      <GreetingCard name="Przemysław"/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);