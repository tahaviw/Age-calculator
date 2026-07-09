import dayjs from 'dayjs'
const calculateBtn = document.querySelector("#calculateBtn")

calculateBtn.addEventListener("click", function calculate() {
    const birthDateInput = document.querySelector("#birthdate").value
    const today = dayjs().startOf('day')

    const age = today.diff(birthDateInput, 'year')
    console.log(`you are ${age} old`)
    const daysAlive = today.diff(birthDateInput, 'day')
    console.log(`youve been alive for ${daysAlive}`)
    
    let nextBirthday = dayjs(birthDateInput).year(today.year()).startOf('day');
        // checks if the birthday had already passed for this year
    if (nextBirthday.isBefore(today)) { 
        //if so it push the next birthday Year to the next year by adding 1
        nextBirthday = nextBirthday.add(1, 'year');
    }
    const daysUntilBirthday = nextBirthday.diff(today, 'day');
    console.log(`Days until next birthday: ${daysUntilBirthday}`);
})