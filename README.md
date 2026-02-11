# Google Cloud TechConf 2026 Website

A premium, responsive, 1-day technical conference website built with Python/Flask and vanilla HTML/CSS/JS.

## Features

- **Dynamic Schedule:** Displays 8 technical talks and a lunch break.
- **Search & Filtering:** Real-time client-side filtering by talk title, speaker name, or category.
- **Premium Design:** Glassmorphism-inspired UI with dark mode aesthetics and responsive layout.
- **Responsive:** Optimized for both desktop and mobile viewing.

## Setup & Running

1. **Prerequisites:**
   - Python 3.8+
   - pip (Python package installer)

2. **Installation:**
   ```bash
   pip install flask
   ```

3. **Run the Application:**
   ```bash
   python app.py
   ```

4. **Access the Conference:**
   Open your browser and navigate to: [http://localhost:5000](http://localhost:5000)

## Project Structure

- `app.py`: Main Flask application file.
- `data.py`: Generates dummy data for the conference schedule.
- `templates/`: HTML templates (Jinja2).
  - `base.html`: Base layout.
  - `index.html`: Main schedule view.
- `static/`: Static assets.
  - `css/style.css`: Stylesheet.
  - `js/main.js`: Search functionality.

## Customization

To modify the schedule or speakers, edit the `get_data()` function in `data.py`.
