import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  flex: 1;
  padding: 12px 0;
  font-size: 16px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background-color: #cccccc;
  color: #222222;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    background-color: #b3b3b3;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;
