const createSlice = (data) => {
  console.log(data);
};

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      return {
        todoList: [
          ...state.todoList.filter((item) => item.id !== action.payload),
        ],
      };
    },
    editTodo: (state, action) => {
      const itemIndex = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList.map((item, index) => {
        if (action.payload.id === item.id) {
          if (index === itemIndex) {
            item.input = action.payload.input;
          }
        }
        return item;
      });
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.done = !item.done;
        }
        return item;
      });
    },
  },
});

export const { saveTodo, removeTodo, editTodo, setCheck } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
