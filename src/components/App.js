import styled from "styled-components";
import BoardList from "./board/boardList";
import BoardMenu from "./board/boardMenu";

const Wrapper = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  overflow: scroll;
`;

const BoardContainer = styled.div`
  flex: 1;
  border-right: 1px solid black;
`;

function App() {
  return (
    <Wrapper>
      <ContentContainer>
        <BoardContainer>
          <BoardList />
          <BoardMenu />
        </BoardContainer>
      </ContentContainer>
    </Wrapper>
  );
}

export default App;
