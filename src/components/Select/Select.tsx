import Image from "next/image";
import ReactDOM from 'react-dom';
import classNames from "classnames";
import React, { useState, useEffect, useRef } from 'react';

import styles from "./styles.module.css";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  placeholder: string;
  options: SelectOption[];
  selectedOption: SelectOption | null;
  onOptionSelected: (value: SelectOption | null) => void;
}

const Select: React.FC<SelectProps> = ({ options, placeholder, selectedOption, onOptionSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});
  const headerRef = useRef<HTMLDivElement | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const allOptions = [{value: "Не выбран", label: "Не выбран"}, ...options];

  useEffect(() => {
    if (isOpen && headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setMenuStyle({
        width: `${rect.width}px`,
        top: `${rect.top + document.documentElement.scrollTop + rect.height + 4}px`,
        left: `${rect.left}px`,
        position: 'absolute'
      });
    }
  }, [isOpen]);


  useEffect(() => {
    const closeOptionsOnScroll = () => setIsOpen(false);

    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node) && event.target !== headerRef.current) {
        setIsOpen(false);
      }
    }

    window.addEventListener('scroll', closeOptionsOnScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener('scroll', closeOptionsOnScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: SelectOption) => () => {
    if (value.value === "Не выбран") {
      onOptionSelected(null);
    } else {
      onOptionSelected(value);
    }
    setIsOpen(false);
  };

  const rootStyles = classNames(styles.root, {
    [styles.placeholder]: !selectedOption,
  });

  const svgStyles = classNames(styles.svg, {
    [styles.svgOpen]: isOpen,
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      toggling();
    }
  };

  return (
    <div tabIndex={0} ref={headerRef} className={rootStyles} onClick={toggling} onKeyDown={handleKeyDown}>
      <div>{selectedOption ? selectedOption.label : placeholder}</div>
      <Image
        src="/openSelect.svg"
        alt="open image"
        className={svgStyles}
        width={18}
        height={18}
        priority
      />
      {isOpen && (
        ReactDOM.createPortal(
          <div ref={selectRef} className={styles.options} style={menuStyle}>
            {allOptions.map((option) => (
              <div className={styles.option} key={option.value} onClick={onOptionClicked(option)}>
                {option.label}
              </div>
            ))}
          </div>,
          document.body
        )
      )}
    </div>
  );
};

export default Select;
