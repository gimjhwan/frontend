import { useState } from "react";
import styled from "styled-components";

export const SearchPage = () => {
  const [keyword, setKeyword] = useState;
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <Container>
      <input type="text" value={keyword} onChange={onChange} />
    </Container>
  );
};

const Container = styled.div`
  // CSS
`;
