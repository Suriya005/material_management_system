import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export default function Preloader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  });
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <ReactLoading
        type={"spin"}
        color={"green"}
        height={"20%"}
        width={"20%"}
      />
    </div>
  );
}
