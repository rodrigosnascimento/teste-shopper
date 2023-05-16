import { useState } from "react";
import Form from "./components/Form";
import { updateProduct } from "./api/updateProduct";
import { AppContainer, Header, Title, UpdateType, UpdateButton, ProductTable, TableHead, TableRow, TableHeader, TableBody, TableCell, RefreshButton } from "./styled"
import { updatePack } from "./api/updatePacks";

function App() {
  const [file, setFile] = useState(null)
  const [page, setPage] = useState(0)
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
  }

  return (
    <AppContainer>
      <Header>
        <Title>Atualização de items</Title>
      </Header>
      <UpdateType>
        <UpdateButton active={page === 1} onClick={() => setPage(1)}>
          Produto
        </UpdateButton>
        <UpdateButton active={page === 2} onClick={() => setPage(2)}>
          Pack
        </UpdateButton>
      </UpdateType>
      {page === 1 && (
        <Form title="Product" onChange={handleFileChange} update={updateProduct} file={file} setData={setData} setError={setError} />
      )}
      {page === 2 && (
        <Form title="Pack" onChange={handleFileChange} update={updatePack} file={file} setData={setData} setError={setError} />
      )}
      <ProductTable>
        <TableHead>
          <TableRow>
            <TableHeader>Código</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Preço atual</TableHeader>
            <TableHeader>Novo preço</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.code}>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.current_price}</TableCell>
              <TableCell>{item.new_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ProductTable>
      {
        error && <p>{error}</p>
      }
      {
        (page === 1 || page === 2) && <RefreshButton onClick={() => setPage(0)}>Atualizar</RefreshButton>
      }
    </AppContainer>

  );
}

export default App;
