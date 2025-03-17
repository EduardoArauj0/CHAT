// login elements

const login = document.querySelector('.Login')
const loginForm = document.querySelector('.Login__form')
const loginInput = document.querySelector('.Login__input')

const colors = [
    "cadetblue",
    "darkgodenrod",
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

    console.log(user)
}

loginForm.addEventListener('submit', handleSubmit)