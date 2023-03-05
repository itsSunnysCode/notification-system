import React from "react";
/*Library */
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
interface Option {
  label: string;
  value: number | string;
}
interface Props {
  label: string;
  onChange: (e: SelectChangeEvent) => void;
  value: string | undefined;
  options: Option[];
}

const CustomizedSelect: React.FC<Props> = ({
  label,
  onChange,
  value,
  options,
}) => {
  return (
    <FormControl size="small" sx={{ m: 1, minWidth: 220 }}>
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {options?.map((option: Option) => (
          <MenuItem value={option?.value}>{option?.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomizedSelect;
