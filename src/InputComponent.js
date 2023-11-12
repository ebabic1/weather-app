import React from "react"
import { Autocomplete, TextField } from "@mui/material";
const cities = ["Sarajevo", "Mostar"];
const InputComponent = ({handleChange,city}) => (
    <>
        <div className="input-wrapper">
          <div>
            <Autocomplete
              disablePortal
              id="city-search"
              options={cities}
              onChange={(event, value) => handleChange(event, value)}
              value={city}
              sx={[{ width: 300 }, { borderRadius: "50%" }]}
              renderInput={(params) => <TextField {...params} label="City" />}
            />
          </div>
        </div>
    </>
);
export default InputComponent