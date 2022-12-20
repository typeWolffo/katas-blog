import classnames from "classnames";
import { PropsWithChildren } from "react";

type Props = {
  variant: "ghost" | "contained";
};

function Button(props: PropsWithChildren<Props>) {
  const { variant, children } = props;

  return (
    <button
      className={classnames("button", { [`button--${variant}`]: variant })}
    >
      {children}
    </button>
  );
}

export default Button;
