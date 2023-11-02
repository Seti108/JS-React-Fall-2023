import { useEffect, useState } from "react";
import fromUnixTime from "date-fns/fromUnixTime";
const TaskList = ({ task }) => {
  const apiUrl = `https://week-7-backend.onrender.com/tasks/${task._id}/check`;
  const [checkBox, setCheckBox] = useState(task.isChecked);

  const niceDate = fromUnixTime(task.date / 1000).toDateString();
  // console.log(niceDate);
  const handleChange = () => {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) console.log("error posting the api");
    });
    setCheckBox(!checkBox);
  };
  return (
    <div>
      <label>{task.description}</label>
      <input type="checkbox" checked={checkBox} onChange={handleChange} />
      <p>{niceDate}</p>
    </div>
  );
};

export default TaskList;

// POST (a HTTP method) / URI (/endpoint-uri)
// Host: google.com
// Accept: application/json (the data type we request)
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:68.0) Gecko/20100101 Firefox/68.0
// Authorization: <token>
// Connection: keep-alive

// {
// this is the body, or actual content of our API call. In a POST call, it could for example create a variable, ie: "name": "sebbe"
// }
