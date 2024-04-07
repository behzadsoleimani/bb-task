import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { SearchPropTypes } from "./Search.types";
import { SearchInput } from "./Search.styles";

export function Search(props: SearchPropTypes) {
  const { onChange } = props;
  return (
    <SearchInput
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search ..."
        inputProps={{ "aria-label": "Search ..." }}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon />
    </SearchInput>
  );
}
