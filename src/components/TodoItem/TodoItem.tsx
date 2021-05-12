import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ children: string }> = ({ children }) => {
  return <li className={classes.item}>{children}</li>;
};

export default TodoItem;
