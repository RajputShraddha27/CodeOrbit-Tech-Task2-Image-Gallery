# Lensora — Visual Stories

Lensora is a modern and responsive visual gallery web application built with React.js and Vite. It presents a curated collection of AI-generated visuals through a clean, minimal and editorial-style interface.

The project focuses on visual storytelling and provides an interactive experience for exploring images across different categories.

## Features

* Modern and minimal editorial UI
* Fully responsive design
* Visual gallery with multiple image categories
* Search functionality
* Category-based filtering
* Interactive image cards
* Image lightbox for detailed viewing
* Previous and next image navigation
* Keyboard navigation using arrow keys
* Escape key support to close the lightbox
* Featured visual story section
* Smooth scrolling navigation
* Subtle hover effects and animations
* Scroll-to-top functionality
* Mobile-friendly navigation
* AI-generated visual collection

## Live Demo

🔗 [View Live Project](https://codeorbit-tech-task2-image-gallery.netlify.app/)

## Collections

The visual archive includes four categories:

* Nature
* Architecture
* Portraits
* Abstract

## Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* React Icons
* Vite

## Project Structure

```text
lensora/
├── public/
│   ├── image.png
│   └── images/
│       ├── hero-main.png
│       ├── hero-small-1.png
│       ├── hero-small-2.png
│       └── gallery/
│           ├── nature-1.png
│           ├── nature-2.png
│           ├── nature-3.png
│           ├── architecture-1.png
│           ├── architecture-2.png
│           ├── architecture-3.png
│           ├── portrait-1.png
│           ├── portrait-2.png
│           ├── portrait-3.png
│           ├── abstract-1.png
│           ├── abstract-2.png
│           └── abstract-3.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── SearchFilter.jsx
│   │   ├── SearchFilter.css
│   │   ├── Gallery.jsx
│   │   ├── Gallery.css
│   │   ├── ImageCard.jsx
│   │   ├── ImageCard.css
│   │   ├── Lightbox.jsx
│   │   ├── Lightbox.css
│   │   ├── FeaturedStory.jsx
│   │   ├── FeaturedStory.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── data/
│   │   └── galleryData.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/RajputShraddha27/CodeOrbit-Tech-Task2-Image-Gallery
```

Move into the project directory:

```bash
cd Task2-Image-Gallery
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

## Image Disclaimer

All visuals used in Lensora are AI-generated and are included for demonstration and frontend development purposes.

## Author

**Rajput Shraddha**

Frontend Developer & React.js Developer

## Project Purpose

Lensora was created as a frontend development project to demonstrate responsive web design, React component architecture, search and filtering functionality, interactive image viewing, and modern CSS styling.