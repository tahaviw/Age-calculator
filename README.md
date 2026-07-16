# Age Calculator

A highly accurate, client-side web application designed to calculate precise chronological age, cumulative days lived, and countdowns to upcoming birthdays. By leveraging lightweight modern date-time parsing, it offers a fast and reliable interface for users to immediately discover granular milestones about their lifespans.

## Features

- Dynamic DOM Rendering: Real-time generation of results without page reloads, transitioning smoothly between error messages and actual date-time calculations.
- Comprehensive Date Analysis: Simultaneously computes absolute years lived, exact days active, and remaining days until the next annual birthday milestone.
- Intuitive Edge Case Handling: Automatically determines if a birthday has already passed in the current calendar year and dynamically advances the targeted target to the following year.
- Fully Responsive Design: A highly polished mobile-first user interface built with customized modern typography and fluid CSS properties.

## Built With

- HTML5: Semantic markup structures for standard inputs and outputs.
- CSS3: Native Custom Properties and modern CSS selector configurations such as `:has()` and `:not()`.
- JavaScript ES6: Modular design patterns featuring native `import`/`export` syntax.
- npm Packages: Powered by the lightweight `dayjs` package for dependable temporal arithmetic and standardizations.

## You can view the live demo of the project here: https://age-calculator-tahaviw.netlify.app/

## Installation & Setup

Ensure that Node.js and npm are installed on your workstation. Run the following terminal instructions to run the application locally:

```bash
# Clone the repository
git clone https://github.com/tahabelghiti/age-calculator.git

# Navigate into the project directory
cd age-calculator

# Install dependencies
npm install

# Launch the local Vite development server
npm start
```

Once executed, open your browser and navigate to the local server address displayed in your terminal console (typically `http://localhost:5173`).

## Usage

1. Open the application interface in any modern web browser.
2. Select the date picker input to specify your valid birthdate.
3. Click the "Calculate" button.
4. The application processes the data and instantly presents three specific results: your exact current age in years, the cumulative days elapsed since your birthdate, and the remaining days countdown to your upcoming anniversary.

## Game Logic

Under the hood, the application handles dynamic date mathematics using modern modules:

- Input Capture: The main controller extracts the input date value on action, immediately feeding the raw string into the processing logic.
- Temporal Normalization: By utilizing `dayjs()`, the system forces both the input date and the active comparison timestamp to the start of their respective days (`.startOf('day')`). This eliminates daylight savings differences and hour/minute mismatches.
- Year and Day Discrepancy Calculation: Absolute age and elapsed active lifespan are calculated cleanly via `.diff(birthDateInput, 'year')` and `.diff(birthDateInput, 'day')`.
- Iterative Birthday Adjustments: To determine the remaining time until the upcoming birthday, the engine temporarily assigns the current year to the user's birth month and day. If the calculated difference between this value and today's date falls below zero, the current year's date is evaluated as historical, prompting the engine to add one year to the target anniversary object using `.add(1, 'year')`.
- State Isolation: Visual states are separated from calculation mechanisms. If the input is empty or invalid, a structural CSS fallback matches via selector combinations, cleanly communicating input faults without leaking script errors.

## Footer

Taha Belghiti — Junior Front-End Developer
Built with HTML, CSS, and JavaScript · © 2026
