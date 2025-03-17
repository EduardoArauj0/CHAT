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

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const user = { id: '', name: '', color: ''}

const handleSubmit = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value 
    user.color = getRandomColor()   

    login.style.display = "none"
    chat.style.display = "flex"

    console.log(user)
}

loginForm.addEventListener('submit', handleSubmit)