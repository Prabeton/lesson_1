import { createRoot } from "react-dom/client";
import { useState } from 'react';
import GreetingCard from './components/GreetingCard';
import UserProfile from './components/UserProfile';
import LikeButton from './components/LikeButton';
import Todo from './components/Todo';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  }
  
  return (
    <div className="app">
      <h1>React Lesson One</h1>
      <GreetingCard name="Przemysław"/>
      <UserProfile />
      <LikeButton count={count} onClick={countUp} />
      <Todo taskName="Naprawić drzwi wejściowe" />
      <Todo taskName="Zafugować płytki" />
      <Todo taskName="Położyć kostkę na werandzie" />
      <Todo taskName="Kupić dekski na płot" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);