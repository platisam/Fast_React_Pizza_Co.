import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function action({ request, params }) {
  console.log("update");
  return null;
}
