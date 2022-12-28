import { Button } from "../button";

function Input() {
  return (
    <div className="input">
      <input
        type="text"
        className="input__text-field"
        placeholder="Enter your email"
      />
      <Button variant="contained">Subscribe</Button>
    </div>
  );
}
export default Input;
