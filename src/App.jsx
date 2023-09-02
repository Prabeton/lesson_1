import { createRoot } from "react-dom";
import Student from "./components/Student";

const students = [
  {
    name: "Łukasz",
    subject: "Frontend",
    description: "Very good student",
  },
  {
    name: "Mariola",
    subject: "Backend",
    description: "The best of the bests",
  },
  {
    name: "Przemek",
    subject: "Fullstack",
    description: "Pretty good",
  },
  {
    name: "Stefan",
    subject: "Analyst",
    description: "Medium",
  },
];

const student = {
  name: "Łukasz",
  subject: "Frontend",
  description: "Very good student",
};

const App = (props) => {
  console.log("props", props);

  const handleClick = (event) => {
    console.log("event", event);
    alert(`Siemka`);
  };
  return (
    <div>
      <h1>Lista studentów</h1>
      {students.map(({ name, subject, description }) => (
        <Student
          name={name}
          subject={subject}
          description={description}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
