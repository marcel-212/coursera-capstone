import { useState, useEffect, useRef } from "react";

const SelectInput = ({ options = [], current, setCurrent, disabled, defaultValue }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!current && defaultValue) setCurrent(defaultValue);
  }, [current, defaultValue, setCurrent]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="select" ref={wrapperRef}>
      <button
        type="button"
        style={disabled ? { borderColor: "gray", color: "gray", cursor: "initial" } : {}}
        onClick={() => { if (!disabled) setOpen(prev => !prev); }}
        className={`select-btn ${open ? "open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-disabled={disabled}
      >
        {current || defaultValue || "Select"}
      </button>

      {open && (
        <div className="select-dropdown" role="listbox">
          {options.map(option => (
            <div
              key={option}
              id={`select-option-${option}`}
              role="option"
              aria-selected={current === option}
              className="select-option"
              onClick={() => {
                setCurrent(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
