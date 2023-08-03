import Button from "../../ui/Button";

const UpdateItemQuantity = ({ pizzaId }) => {
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type="round">-</Button>
      <Button type="round">+</Button>
    </div>
  );
};
export default UpdateItemQuantity;
