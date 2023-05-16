import axios from "axios"

export const updatePack = (file, setData, setError) => {
    const formData = new FormData()
    formData.append("file", file)
    axios.put("http://localhost:3003/pack/update", formData)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            setError(err.response.data)
        })
}