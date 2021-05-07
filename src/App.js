import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Input from "./components/Input";
import ListTodo from "./components/ListTodo";
import Navbar from "./components/Navbar";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

const useStyles = makeStyles({
  root: {
    paddingBottom: "1rem",
  },
  container: {
    margin: "0.7rem",
  },
  list: {
    width: "100%",
    maxWidth: 360,
    margin: "1rem auto",
  },
});

function App() {
  const classes = useStyles();
  const todoList = useSelector(selectTodoList);

  return (
    <div className={classes.root}>
      <Navbar />
      <Input />
      <div className={classes.container}>
        <List className={classes.list}>
          {todoList.map((item, index) => (
            <ListTodo
              key={index}
              input={item.input}
              checked={item.done}
              id={item.id}
            />
          ))}
        </List>
      </div>
    </div>
  );
}

export default App;
