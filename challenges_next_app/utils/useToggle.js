import { useState } from 'react';

export default function useToggle(initialState) {
  const [toggle, setToggle] = useState(initialState);

  const setToggleStatus = () => setToggle((prev) => !prev);

  return { toggle, setToggleStatus };
}
