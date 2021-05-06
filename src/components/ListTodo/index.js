import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import { useDispatch } from "react-redux";
import { removeTodo, editTodo, setCheck } from "../../features/todoSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#E8EAF6",
    margin: "1rem auto",
  },
  checked: {
    textDecoration: "line-through",
  },
  listTodo: {
    textDecoration: "none",
  },
  listItem: {
    padding: "0px 5px",
  },
}));

function ListTodo({ input, checked, id }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [bool, setBool] = useState(true);
  const [text, setText] = useState(input);

  useEffect(() => {
    setText(input);
  }, [input]);

  const handleChange = () => {
    dispatch(setCheck(id));
  };

  const deleteTodo = () => {
    dispatch(removeTodo(id));
  };

  const editTodos = () => {
    if (bool) {
      return setBool(false);
    }
    setBool(true);
    dispatch(editTodo({ id, input: text }));
  };

  return (
    <List className={classes.root}>
      <ListItem className={classes.listItem}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
            onClick={handleChange}
          />
        </ListItemIcon>
        {/* <ListItemText className={checked ? classes.checked : classes.listTodo}>
          {input}
        </ListItemText> */}
        <TextField
          id="standard-read-only-input"
          label={bool ? "Read Only" : "Editing"}
          value={text}
          InputProps={{
            readOnly: bool,
          }}
          color="secondary"
          variant="outlined"
          className={checked ? classes.checked : classes.listTodo}
          onChange={(e) => setText(e.target.value)}
        />
        <IconButton aria-label="edit" onClick={editTodos}>
          {bool ? <EditIcon /> : <CheckBoxIcon />}
        </IconButton>
        <IconButton aria-label="delete" onClick={deleteTodo}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </List>
  );
}

export default ListTodo;
