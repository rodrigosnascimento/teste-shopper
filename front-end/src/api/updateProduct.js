import axios from "axios"

export const updateProduct = (file, setData, setError) => {
    const formData = new FormData()
    formData.append("file", file)
    axios.put("http://localhost:3003/product/update", formData)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            setError(err.response.data)
        })
}