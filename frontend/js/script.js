// login elements

const login = document.querySelector('.Login')
const loginForm = login.querySelector('.Login__form')
const loginInput = login.querySelector('.Login__input')

// chat elements

const chat = document.querySelector('.Chat')
const chatForm = chat.querySelector('.Chat__form')
const chatInput = chat.querySelector('.Chat__input')

const colors = [
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold"
]   
const user = { id: '', name: '', color: ''}

let websocket

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const processMessage = ({data}) => {
    alert(data)
}

const handleLogin = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value 
    user.color = getRandomColor()   

    login.style.display = "none"
    chat.style.display = "flex"

    websocket = new WebSocket("ws://localhost:8080")
    websocket.onmessage = processMessage
}

loginForm.addEventListener('submit', handleLogin)