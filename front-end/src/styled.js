import styled from "styled-components"

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 20px;
`;

export const Header = styled.header`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const UpdateType = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const UpdateButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 16px;
  background-color: ${(props) => (props.active ? '#e0e0e0' : 'transparent')};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHead = styled.thead`
  background-color: #f0f0f0;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const RefreshButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 16px;
  background-color: #e0e0e0
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #e0e0e0;
  }
`;
