import { PropsWithChildren } from "react";
import { camelToHuman } from "../../helpers/camelToHuman";
import classnames from "classnames";

type Props = {
  isActive: boolean;
  onClick: () => void;
};

function Tab(props: PropsWithChildren<Props>) {
  const { onClick, isActive, children } = props;
  const isChildString = children && typeof children === "string";
  const tabContent = isChildString ? camelToHuman(children) : children;

  return (
    <div
      className={classnames("tabs__tab-item", {
        "tabs__tab-item--active": isActive,
      })}
      onClick={onClick}
    >
      {tabContent}
    </div>
  );
}

export default Tab;
