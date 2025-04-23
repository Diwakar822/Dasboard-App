# Dashboard Widget Management System
A dynamic dashboard interface for managing widgets across multiple categories with full CRUD functionality.

## Features

- 🏗️ Dynamic widget management (create, read, update, delete)
- 📂 Category-based organization
- 🔍 Live search functionality
- ➕ Modal and route-based widget creation
- ♻️ Local state persistence
- 📱 Fully responsive design

## Live Demo

View Demo : https://diwakars-dashboard.netlify.app/

## Screenshots

| Dashboard View | Add Widget Form |
|---------------|-----------------|
| ![Dashboard](screenshots/dashboard.png) | ![Add Widget](screenshots/add-widget.png) |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dashboard-widget-system.git
   cd dashboard-widget-system

   Project Structure

   src/
├── components/       # Reusable components
│   ├── Widget.jsx
│   ├── CategorySection.jsx
│   └── AddWidgetForm.jsx
├── pages/            # Route components
│   ├── DashboardPage.jsx
│   └── AddWidgetPage.jsx
├── context/          # State management
│   └── WidgetContext.js
├── data/             # Sample data
│   └── widgets.json
├── App.jsx           # Main app with routes
└── index.js          # Entry point

Available Scripts
npm start: Runs the app in development mode

npm run build: Builds the app for production

npm test: Runs tests (if configured)

npm run eject: Ejects from Create React App (advanced)

Technical Stack
Frontend: React 18

Styling: Tailwind CSS

Routing: React Router v6

State Management: Context API

Build Tool: Vite (or Create React App)

Assignment Requirements Checklist
✅ Dynamic widget creation/deletion
✅ Category-based organization
✅ Search functionality
✅ JSON data structure
✅ React implementation
✅ State management
✅ GitHub submission

How to Test
1. Try adding a new widget through both:
2. The "+ Add Widget" button (route navigation)
3. The quick-add modal (if implemented)

 Test widget deletion via:

1. Individual widget delete buttons
2. Category-level "Remove All" function
3. Verify search works across all categories
