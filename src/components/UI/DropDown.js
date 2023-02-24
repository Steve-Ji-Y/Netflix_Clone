import { useState } from "react";

const DropDown = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button>
        <span>{title}</span>
      </button>
    </>
  );
};

export default DropDown;
