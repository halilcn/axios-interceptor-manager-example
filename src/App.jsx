import { useEffect } from "react";
import {
  getAllTodosOnCompany,
  getTodoOnCompanyWithoutAuth,
  getTodoOnCompanyWithoutHeavyCompute,
  postTodoOnCompany,
} from "./api";

const App = () => {
  const handleAllRequests = async () => {
    const allTodosOnCompany = await getAllTodosOnCompany();
    console.log("allTodosOnCompany", allTodosOnCompany);

    const todoOnCompanyWithoutAuth = await getTodoOnCompanyWithoutAuth(1);
    console.log("todoOnCompany", todoOnCompanyWithoutAuth);

    const todoOnCompanyWithoutHeavyCompute =
      await getTodoOnCompanyWithoutHeavyCompute(2);
    console.log(
      "todoOnCompanyWithoutHeavyCompute",
      todoOnCompanyWithoutHeavyCompute
    );

    const postedTodo = await postTodoOnCompany();
    console.log("postedTodo", postedTodo);
  };

  useEffect(() => {
    handleAllRequests();
  }, []);

  return <>axios interceptor test</>;
};
export default App;
