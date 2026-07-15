import dayjs from 'dayjs'
import { renderResults } from './ui'
const calculateBtn = document.querySelector("#calculateBtn")

export function calculate() {    
    const birthDateInput = document.querySelector("#birthdate").value
    const today = dayjs().startOf('day')
    const age = today.diff(birthDateInput, 'year')
    const daysAlive = today.diff(birthDateInput, 'day')

    let nextBirthday = dayjs(birthDateInput).year(today.year()).startOf('day');
        // checks if the birthday had already passed for this year
    if (nextBirthday.diff(today, 'day') < 0) { 
        //if so it push the next birthday Year to the next year by adding 1
        nextBirthday = nextBirthday.add(1, 'year');
    }
    const daysUntilBirthday = nextBirthday.diff(today, 'day')

    return {daysUntilBirthday, age, daysAlive, birthDateInput}
}
calculateBtn.addEventListener("click", renderResults)