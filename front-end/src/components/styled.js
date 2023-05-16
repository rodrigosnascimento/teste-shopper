import styled from "styled-components"

export const FormContainer = styled.div`
  margin-bottom: 20px;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const FileInput = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  &::file-selector-button {
    background-color: rgb(224, 224, 224);
    color: black;
    border-radius: 4px;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
  }
`;

export const ValidateButton = styled.button`
  padding: 8px 16px;
  background-color: #8d99ae;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;