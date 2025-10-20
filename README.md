# Currency Converter Web App

A responsive web application that allows users to convert currencies in real-time using live exchange rates from an external API. Built with HTML, CSS, and JavaScript, it features dynamic dropdowns, country flags, input validation, and performance optimizations.

---

##  Features

* Convert currencies in real-time using the latest exchange rates via a **REST API**.
* **Dynamic dropdowns** populated with all supported currencies.
* **Country flags** update automatically based on selected currency.
* Input validation ensures non-empty, positive values.
* Optimized performance with **debounced input handling**.
* Supports **keyboard shortcuts** (Enter key to convert).
* Responsive design for desktop and mobile screens.

---

##  Technologies Used

* **JavaScript (ES6+)** – Fetch API, async/await, DOM manipulation
* **HTML5** – Semantic markup
* **CSS3** – Flexbox, responsive design, custom styling
* **REST API** – Live currency exchange rates

---

##  Installation / Usage

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/currency-converter.git
```

2. **Open `app.html`** in your browser.

3. **Select currencies** from the dropdowns, enter an amount, and click **Get Exchange Rate** or press **Enter**.

---

## 📂 Project Structure

```
currency-converter/
├── app.html        # Main HTML file
├── app.css         # CSS styling
├── app.js          # JavaScript logic
|-- country_codes.js       # JavaScript with country and currency code
└── README.md         # Project documentation
```

---

##  How It Works

1. The app fetches live currency data from the **REST API**:
   `https://latest.currency-api.pages.dev/v1/currencies/<currency>.json`
2. It calculates the converted amount based on the selected currencies.
3. The UI updates dynamically, including country flags and converted value.

---

##  UI/UX Design

* Clean, modern design with **dark/light color schemes**.
* Light color container stands out against the background for readability.
* Dark colored button draws user attention for interaction.

---

##  Future Improvements

* Add **historical exchange rate charts**.
* Add **multiple currency conversion** at once.
* Improve **accessibility** for screen readers.
* Add **theme toggle** (dark/light mode).

---
