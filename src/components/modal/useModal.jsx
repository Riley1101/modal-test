import { useState } from "react";
const useModal = () => {
  const [visible, setVisible] = useState(false);
  let handleToggle = () => {
    setVisible(!visible);
  };
  return { visible, handleToggle };
};
export default useModal;
