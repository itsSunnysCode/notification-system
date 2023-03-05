import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const CustomizedBtn: React.FC<Props> = ({ onClick, children }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomizedBtn;
