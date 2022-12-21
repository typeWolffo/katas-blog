import classnames from "classnames";
import { PropsWithChildren } from "react";

export type ButtonProps = {
  variant: "ghost" | "contained";
  onClick?: () => void;
};

function Button(props: PropsWithChildren<ButtonProps>) {
  const { variant, children, onClick } = props;

  return (
    <button
      className={classnames("button", {
        [`button--${variant}`]: variant,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
