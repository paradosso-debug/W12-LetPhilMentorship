# JavaScript Fundamentals — Tier 2 Final Projects

These projects integrate **DOM manipulation, local storage, navigation, API usage, a contact form, and responsive design** using **HTML, CSS, and JavaScript**.

---

## 📌 Project List

---

### 1. Personal Dashboard

**Tech:** HTML, CSS, JavaScript

**Features:**
✅ Dynamic welcome message based on the time of day — use `new Date().getHours()` and conditionals to switch between "Good morning", "Good afternoon", "Good evening"
✅ Weather widget using the **Open-Meteo API** (free, no API key) — fetch with Axios and async/await, show loading state, handle errors in catch block
✅ To-do list — add, complete, and delete tasks; persist the full tasks array with `localStorage.setItem` / `JSON.stringify`, load with `JSON.parse` and a null check on first visit
✅ Notes section — save note content to localStorage on every keystroke (auto-save pattern)
✅ Navigation between sections (home, weather, tasks, notes) — show/hide sections using `classList`
✅ Contact form — validate name, email, and message using string methods from Lesson 3; store submitted entries in localStorage as a JSON array; show a success message on valid submission
✅ Responsive design

---

### 2. Recipe Finder App

**Tech:** HTML, CSS, JavaScript

**Features:**
✅ Search for recipes using the **[TheMealDB API](https://www.themealdb.com/api.php)** (free, no API key) — fetch with Axios and async/await, build the search URL with query parameters
✅ Render recipe cards to the DOM using component functions — each card built with `createElement` and `appendChild`
✅ Save favourite recipes to localStorage — store as an array of recipe objects using `JSON.stringify`; load and render on page start with a null check
✅ Filter displayed recipes by category — client-side filter using `.filter()` on the loaded array
✅ Contact form — validate all fields; store submitted messages in localStorage; display a confirmation message
✅ Responsive design

---

### 3. Bookmark Manager

**Tech:** HTML, CSS, JavaScript

**Features:**
✅ Add, edit, and delete bookmarks — each bookmark is an object `{ id, title, url, category }`; store the full array in localStorage with `JSON.stringify`
✅ Categorise bookmarks (Work, Personal, Learning, etc.) — filter by category using `.filter()` on the bookmarks array
✅ Live search — filter visible bookmark cards using an `input` event listener and `.includes()` on the title
✅ Dark mode toggle — persist the user's preference in localStorage (`localStorage.setItem("theme", "dark")`); restore on page load
✅ Render bookmark cards using component functions — `createBookmarkCard({ bookmark, onDelete, onEdit })` following the props pattern from Lesson 15
✅ Contact form — validate and store submitted messages in localStorage
✅ Responsive design

---

### 4. Movie Watchlist App

**Tech:** HTML, CSS, JavaScript

**Features:**
✅ Search movies using the **[OMDb API](https://www.omdbapi.com/)** — free tier available with a simple key signup, OR use **[TheMealDB](https://www.themealdb.com/api.php)** / **[FakeStore API](https://fakestoreapi.com/)** as a keyless alternative to prototype with
✅ Fetch with Axios and async/await — show a loading spinner while the request runs, handle errors in the catch block with a visible error message
✅ Save movies to a Watchlist — store as a localStorage array; check for duplicates before adding using `.find()`
✅ Remove movies from the Watchlist — update the array with `.filter()`, save back to localStorage, re-render
✅ Render movie cards using component functions — pass `{ movie, onAdd, onRemove }` as props
✅ Contact form — validate fields; store submitted suggestions in localStorage; show confirmation
✅ Responsive design

---

### 5. Budget Tracker

**Tech:** HTML, CSS, JavaScript

**Features:**
✅ Add income and expense entries — each entry is an object `{ id, type, category, amount, description, date }`; store the full entries array in localStorage
✅ Categorise expenses (Food, Bills, Transport, etc.) — filter by category using `.filter()`
✅ Calculate and display total balance, total income, and total expenses using `.reduce()` on the entries array
✅ Render a transaction list to the DOM — use `.forEach()` to build each row with `createElement`; re-render the list after every add or delete
✅ Contact form — validate and store messages in localStorage
✅ Responsive layout

---

### 6. Job Application Tracker

**Tech:** HTML, CSS, JavaScript

**Features:**
✅ Add job applications — each application is an object `{ id, company, position, status, notes, dateApplied }`; store the array in localStorage
✅ Update application status (Applied → Interview → Offer → Rejected) — mutate the matching object in the array using `.find()`, save back to localStorage, re-render
✅ Filter applications by status or company name — `.filter()` on the array; live search using an `input` event listener
✅ Render application cards using component functions — `createApplicationCard({ application, onStatusChange, onDelete })` following the props pattern
✅ Dashboard counts — use `.filter()` to count per status, display totals in the header
✅ Contact form — validate and store submitted enquiries in localStorage
✅ Responsive design

---

### 7. Fitness Tracker

**Tech:** HTML, CSS, JavaScript

**Features:**
✅ Log workouts — each workout is an object `{ id, date, type, duration, notes }`; store the full array in localStorage
✅ Fetch exercise ideas from the **[WGER Workout API](https://wger.de/api/v2/exercise/?format=json&language=2&limit=20)** (free, no key required) — use Axios and async/await to populate an exercise suggestion list
✅ Filter logged workouts by type (Cardio, Strength, Flexibility) — `.filter()` on the workouts array
✅ Calculate total workout time using `.reduce()` — display in the dashboard header
✅ Render workout cards using component functions — pass `{ workout, onDelete }` as props
✅ Contact form — validate and store messages in localStorage
✅ Responsive layout with tabbed navigation using `classList`

---

### 8. E-Commerce Product Showcase

**Tech:** HTML, CSS, JavaScript

**Features:**
✅ Fetch and display products from the **[FakeStore API](https://fakestoreapi.com/)** (free, no key required) — use Axios and async/await, show a loading state, handle errors
✅ Render product cards using component functions — `createProductCard({ product, onAddToFavourites })` following the props pattern from Lesson 15
✅ Add to favourites — store a favourites array in localStorage; check for duplicates with `.find()`; render the favourites panel from localStorage on page load with a null check
✅ Search and filter products — filter by category using `.filter()`; live search on product name using an `input` listener and `.includes()`
✅ Contact form — validate name, email, and message; store submitted enquiries in localStorage; show a confirmation message
✅ Responsive design with a grid layout

---

### 9. Flashcard Study App

**Tech:** HTML, CSS, JavaScript

**Features:**
✅ Create, edit, and delete flashcards — each card is an object `{ id, question, answer, deck }`; store the full array in localStorage using `JSON.stringify`; load with `JSON.parse` and a null check on first visit
✅ Organise cards into decks — filter by deck name using `.filter()`
✅ Shuffle cards — use a randomisation approach on the filtered array before rendering
✅ Track correct and incorrect answers — maintain a session score object `{ correct, incorrect }`; update with each answer; display running totals
✅ Flip animation — toggle a CSS class with `classList.toggle` on card click
✅ Contact form — validate and store messages in localStorage
✅ Responsive design

---

### 10. Daily Habit Tracker

**Tech:** HTML, CSS, JavaScript

**Features:**
✅ Add daily habits — each habit is an object `{ id, name, completedDates: [] }`; store the habits array in localStorage
✅ Mark habits complete — push today's date string into `completedDates`, save back to localStorage, re-render
✅ Streak counter — calculate the current streak by checking consecutive dates in `completedDates` using a loop
✅ Render habit cards using component functions — `createHabitCard({ habit, onComplete, onDelete })` following the props pattern
✅ Dashboard summary — use `.filter()` to count how many habits are completed today; display as "X / Y habits done today"
✅ Dark mode toggle — persist preference in localStorage; restore on page load
✅ Contact form — validate name, email, and message; store submitted messages in localStorage; show a confirmation
✅ Responsive layout

---

## 🛠️ How to Get Started

1. Choose a project from the list above.
2. Plan your data structure first — what does each object look like? What goes in localStorage?
3. Build your component functions before wiring up event listeners.
4. Use Axios with async/await for all API calls — loading state before the request, error handling in catch.
5. Persist data with `localStorage.setItem(key, JSON.stringify(data))` — always load with a null check.
6. Validate your contact form using string methods — `.trim()`, `.includes()`, `.length` — before storing to localStorage.
7. Test on both desktop and mobile.

---

### 💡 Which project are you building? Need guidance? Let's discuss!
