import { useState, useEffect, useRef } from "react";

const SelectInput = ({ options = [], current, setCurrent, defaultValue }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!current && defaultValue) {
      setCurrent(defaultValue);
    }
  }, [current, defaultValue, setCurrent]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="select" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className={`select-btn ${open ? "open" : ""}`}
      >
        {current || defaultValue || "Select"}
      </button>

      {open && (
        <div className="select-dropdown">
          {options.map(option => (
            <div
              key={option}
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