import { Button } from "../button";
import React, { useState, PropsWithChildren, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import classnames from "classnames";

type Props = {
  variant: "ghost" | "contained";
};

function Dropdown(props: PropsWithChildren<Props>) {
  const { variant, children } = props;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // @ts-ignore react events are trash
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <Button variant={variant} onClick={toggleDropdown}>
        {children}
        <IoChevronDown
          className={classnames("dropdown__button-icon", {
            "dropdown__button-icon--active": isOpen,
          })}
        />
      </Button>

      {isOpen && (
        <ul className="dropdown__menu">
          <li className="dropdown__menu-item">Product 1</li>
          <li className="dropdown__menu-item">Product 2</li>
          <li className="dropdown__menu-item">
            Product 3 with ultra long name
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
