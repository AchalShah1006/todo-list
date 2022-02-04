import {
  Button,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import CreateTodo from "../CreateTodo";

function Sidebar() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateModalOpen = () => setIsCreateModalOpen(true);

  const handleCreateModalClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setIsCreateModalOpen();
  };
  const handleCreateTodo = () => {
    alert("create todo api");
  };

  return [
    <List key="sidebar-list">
      <ListItem>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleCreateModalOpen}
          startIcon={<Icon color="primary">post_add</Icon>}
        >
          Create new todo
        </Button>
      </ListItem>
      <Divider />
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            <Icon color="primary">library_books</Icon>
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>,
    <CreateTodo
      key="create-todo-modal"
      open={isCreateModalOpen}
      handleCreateTodo={handleCreateTodo}
      handleCreateModalClose={handleCreateModalClose}
    />,
  ];
}

export default Sidebar;
