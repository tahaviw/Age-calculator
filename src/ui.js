import { calculate } from './app.js'

export function renderResults() {
    const result = calculate()
    const resultsContainer = document.querySelector("#results")
    if(!result.birthDateInput) {
        resultsContainer.innerHTML = '<p class="status-msg">Please enter a valid date !</p>'
    }else {
        resultsContainer.innerHTML = `
        <p class="ageDisplay">You are ${result.age} old, old enough !!</p>
        <p class="daysAliveDisplay">You've been alive for ${result.daysAlive}, DAMN !</p>
        <p class="nextBirthdayDisplay">Be ready your NEXT birthday is ${result.daysUntilBirthday}</p>
        `
    }
}