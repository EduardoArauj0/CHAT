// login elements

const login = document.querySelector('.Login')
const loginForm = login.querySelector('.Login__form')
const loginInput = login.querySelector('.Login__input')

// chat elements

const chat = document.querySelector('.Chat')
const chatForm = chat.querySelector('.Chat__form')
const chatInput = chat.querySelector('.Chat__input')
const chatMessages = chat.querySelector('.Chat__messages')

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

const creatMessageSelfElement = (content) => {
    const div = document.createElement("div")

    div.classList.add('Message--self')
    div.innerHTML = content

    return div
}

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const processMessage = ({data}) => {
    const {userId, userColor, userName,  content } = JSON.parse(data)

    const element = creatMessageSelfElement(content)

    chatMessages.appendChild(element)
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

const sendMessage = (event) => {
    event.preventDefault()

    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value
    }

    websocket.send(JSON.stringify(message))

    chatInput.value = ''
}

loginForm.addEventListener('submit', handleLogin)
chatForm.addEventListener('submit', sendMessage)