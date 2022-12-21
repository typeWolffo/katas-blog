import { Button } from "../button";
import { Dropdown } from "../dropdown";

function MenuItems() {
  return (
    <div>
      <Button variant="ghost">Home</Button>
      <Dropdown variant="ghost">Products</Dropdown>
      <Dropdown variant="ghost">Resources</Dropdown>
      <Button variant="ghost">Pricing</Button>
    </div>
  );
}

export default MenuItems;
