import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  children: string;
  onRemove: (todoId: string) => void;
  todoId: string;
}> = ({ children, onRemove, todoId }) => {
  return (
    <li className={classes.item} onClick={() => onRemove(todoId)}>
      {children}
    </li>
  );
};

export default TodoItem;
