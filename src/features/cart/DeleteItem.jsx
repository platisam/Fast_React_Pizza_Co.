import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = () => {
  return <Button type="small">Delete</Button>;
};
export default DeleteItem;
