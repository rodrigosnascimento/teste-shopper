import { FormContainer, FormTitle, InputContainer, FileInput, ValidateButton } from "./styled"

const Form = ({ title, onChange, update, setData, file, setError }) => {
    return (
        <FormContainer>
            <FormTitle>{title}</FormTitle>
            <InputContainer>
                <FileInput type="file" onChange={onChange} />
                <ValidateButton onClick={() => update(file, setData, setError)}>
                    Validar
                </ValidateButton>
            </InputContainer>
        </FormContainer>
    )
}

export default Form