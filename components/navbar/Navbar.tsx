import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "../button";

type Props = {
  items: ReactNode;
};
function Navbar(props: Props) {
  const { items } = props;

  const isLoggedIn = false;

  const UserActions = () => {
    if (!isLoggedIn) {
      return (
        <div className="navbar__user-action">
          <Link className="navbar__user-action-link" href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link className="navbar__user-action-link" href="/register">
            <Button variant="contained">Sign up</Button>
          </Link>
        </div>
      );
    }

    return (
      <div className="navbar__user-action">
        <Link className="navbar__user-action-link" href="/profile">
          Profile
        </Link>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar__items">{items}</div>
      <UserActions />
    </nav>
  );
}

export default Navbar;
