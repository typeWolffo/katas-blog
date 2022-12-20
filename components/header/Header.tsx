import Image from "next/image";
import { PropsWithChildren } from "react";

type Props = {
  logoSrc: string;
};

function Header(props: PropsWithChildren<Props>) {
  const { logoSrc, children } = props;
  return (
    <header className="header">
      <div className="header__logo">
        <Image src={logoSrc} alt="Logo" fill />
      </div>
      {children}
    </header>
  );
}

export default Header;
