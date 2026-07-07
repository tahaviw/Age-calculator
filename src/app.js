import dayjs from 'dayjs'
const calculateBtn = document.querySelector("#calculateBtn")

calculateBtn.addEventListener("click", function calculate() {
    const birthDateInput = document.querySelector("#birthdate").value
    const today = dayjs()

    const age = today.diff(birthDateInput, 'year')
    console.log(age)
})