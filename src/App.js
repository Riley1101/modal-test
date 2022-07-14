import Button from "@mui/material/Button";
import * as React from "react";
import styled from "styled-components";
import FormModal from "./components/modal";
import useModal from "./components/modal/useModal";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  place-items: center;
  justify-content: center;
`;

function App() {
  const { visible, handleToggle } = useModal();
  return (
    <StyledContainer>
      <Button variant="contained" onClick={handleToggle}>
        Open Modal
      </Button>
      <FormModal open={visible} handleClose={handleToggle} />
    </StyledContainer>
  );
}

export default App;
