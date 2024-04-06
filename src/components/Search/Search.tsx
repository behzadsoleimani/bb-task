import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { SearchPropTypes } from "./Search.types";

export function Search(props: SearchPropTypes) {
  const { onChange } = props;
  return (
    <Paper
      component="form"
      sx={{
        m: "10px",
        p: "4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search ..."
        inputProps={{ "aria-label": "Search ..." }}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon />
    </Paper>
  );
}
