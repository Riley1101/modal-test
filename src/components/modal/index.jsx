import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
let InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
`;
let ModalContainer = styled.div`
  outline: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  max-width: 350px;
  min-height: 400px;
  background-color: white;
  padding: 1.2em;
  border-radius: 5px;
`;

let ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
`;

let Title = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
`;
let sx = {
  flexBasis: "40%",
  flexGrow: 1,
};

export default function FormModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContainer>
        <Title>Edit Employe Profile</Title>
        <InputContainer>
          <TextField
            sx={sx}
            size={"small"}
            id="first-name"
            label="First Name"
            variant="outlined"
          />
          <TextField
            sx={sx}
            size="small"
            id="last-name"
            label="Last Name"
            variant="outlined"
          />
          <FormControl sx={sx}>
            <InputLabel id="gender" size="small">
              Select Gender
            </InputLabel>
            <Select
              labelId="gender"
              size="small"
              id="gender"
              label="Select Gender"
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={sx}
            size="small"
            id="email"
            label="Corporate Email"
            variant="outlined"
          />
          <TextField
            id="birthday date"
            label="Birthday Date"
            size="small"
            type="date"
            defaultValue="dd-mm-yyyy"
            sx={sx}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="start date"
            label="Start Date"
            size="small"
            type="date"
            defaultValue="dd-mm-yyyy"
            sx={sx}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            sx={{ flexGrow: 1 }}
            size={"small"}
            id="custom-1"
            label="Custom Field 1"
            variant="outlined"
          />
          <TextField
            sx={{ flexGrow: 1 }}
            size={"small"}
            id="custom-2"
            label="Custom Field 2"
            variant="outlined"
          />
        </InputContainer>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" color="error" />}
            label={
              <Typography fontSize={".8em"} marginTop=".2em" fontWeight="bold">
                Remove this record
              </Typography>
            }
          />
        </FormGroup>
        <ButtonContainer>
          <Button variant="outlined" size="small" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" size="small" onClick={handleClose}>
            Save Changes
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
}
