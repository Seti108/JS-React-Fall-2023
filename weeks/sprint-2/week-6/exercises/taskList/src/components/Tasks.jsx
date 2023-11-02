import { useState, useEffect } from "react";
import TaskList from "./TaskList";
export const Tasks = () => {
  const apiUrl = "https://week-7-backend.onrender.com/tasks";

  // Fetch the tasks from the api and display them on the screen
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);
  // console.log("tasks", tasks);

  return tasks?.map((task) => <TaskList key={task._id} task={task} />);
};

// {
//   "isChecked": true,
//   "_id": "633ad6b9e44296b1fc668718",
//   "description": "Superrr test",
//   "date": 1664800441224,
//   "__v": 0
// }
