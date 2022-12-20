import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Header } from "./header";
import { MenuItems } from "./menuItems";

type Props = { children: ReactNode };

function Layout({ children }: Props) {
  return (
    <>
      <Header logoSrc="/assets/logo.svg">
        <Navbar items={<MenuItems />} />
      </Header>
      <main className="main-content">{children}</main>
    </>
  );
}

export default Layout;
