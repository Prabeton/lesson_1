import { createRoot } from "react-dom/client";
import { useState } from 'react';
import GreetingCard from './components/GreetingCard';
import UserProfile from './components/UserProfile';
import LikeButton from './components/LikeButton';
import Todo from './components/Todo';
import ProductList from './components/ProductList';
import Accordion from './components/Accordion';
import CommentList from './components/CommentList';
import ThemeProvider from './components/ThemeProvider';
import Tab from './components/Tab';
import TabList from './components/TabList';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  }
  const commentsList = [
    { username: "Kazik Staszewski", text: "Wszyscy artyści to prostytutki" },
    { username: "Stanisław Witkiewicz", text: "Polityka to w krysztale pomyje" },
    { username: "Autor Nieznany", text: "Lepiej z mądrym zgubić niż z głupim znaleźć" },
    { username: "Jacek Cygan", text: "A ja wolę moją mamę" },
  ];
  
  
  return (
    <ThemeProvider>
        <div className="app">
          <div className="header">React Lesson One</div>
          <div className="body">
            <div className="leftColumn">
            <TabList>
              <Tab label="Zakładka 1">Zawartość zakładki 1</Tab>
              <Tab label="Zakładka 2">Zawartość zakładki 2</Tab>
              <Tab label="Zakładka 3">Zawartość zakładki 3</Tab>
            </TabList>
            </div>
            <div className="centerColumn">
              <GreetingCard name="Ciekawski Wędrowcze"/>
              <UserProfile />
              <LikeButton count={count} onClick={countUp} />
              <Todo taskName="Naprawić drzwi wejściowe" />
              <Todo taskName="Zafugować płytki" />
              <Todo taskName="Położyć kostkę na werandzie" />
              <Todo taskName="Kupić dekski na płot" />
              <ProductList />
              <Accordion />
            </div>
            <div className="rightColumn"><CommentList comments={commentsList} /></div>
          </div>
        </div>
    </ThemeProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
