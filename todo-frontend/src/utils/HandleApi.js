import axios from "axios"

const baseUrl = 'https://todo-site-spike-ccbp-backend.onrender.com'

const getAllToDo = (setToDo) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log("data ===>", data)
        setToDo(data)
    })
    .catch((err) => console.log(err))
}

const addToDo = (text, setText, setToDo) => {
    axios.post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data)
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios.post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteTodo = (toDoId, setToDo) => {
    axios.post(`${baseUrl}/delete`, {_id: toDoId})
    .then((data) => {
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

export {getAllToDo, addToDo, updateToDo, deleteTodo}