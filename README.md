# Multi-Page Profile Application

## Overview
This project is a continuation of my **Stage 0 Profile Card** task, expanded into a **multi-page, responsive web application**.  
It includes three key pages:  
- **Profile Page** – A personal profile card introducing the developer.  
- **Contact Page** – A form with proper validation, accessibility, and success handling.  
- **About Page** – A reflective section outlining goals, confidence areas, and personal insights.

Built using **semantic HTML**, **accessible markup**, and **responsive CSS**, this project demonstrates front-end best practices for clarity, structure, and usability.

---

## Features

### Profile Page
- Displays a **profile card** with:
  - Avatar  
  - Name and bio  
  - Social media links (Twitter, GitHub, TikTok)  
  - Hobbies and dislikes  
- Built with **semantic HTML** elements (`<article>`, `<header>`, `<section>`, `<figure>`)
- Fully responsive layout
- Navigation bar for easy page switching
- Data attributes for testing (e.g., `data-testid="test-user-avatar"`)

---

### Contact Us Page
- A simple and accessible contact form with validation:
  - **Full Name** (`data-testid="test-contact-name"`)
  - **Email** (`data-testid="test-contact-email"`)
  - **Subject** (`data-testid="test-contact-subject"`)
  - **Message** (`data-testid="test-contact-message"`)
- Validation Rules:
  - All fields are **required**
  - Email must follow `name@example.com` format
  - Message must be **at least 10 characters**
- Shows dynamic **error messages** for each field:
  - `data-testid="test-contact-error-name"`, etc.
- Displays a **success message** after valid submission (`data-testid="test-contact-success"`)
- Accessibility features:
  - Labels connected to inputs with `for`
  - Error messages linked via `aria-describedby`
  - Keyboard navigable and screen-reader friendly

---

### About Me Page
- Structured using semantic HTML with `<main>` and `<section>` elements.
- Reflective sections include:
  - **Bio** (`data-testid="test-about-bio"`)
  - **Goals** (`data-testid="test-about-goals"`)
  - **Areas of Low Confidence** (`data-testid="test-about-confidence"`)
  - **Note to Future Self** (`data-testid="test-about-future-note"`)
  - **Extra Thoughts** (`data-testid="test-about-extra"`)
- Follows accessible and semantic markup standards.
- Responsive, consistent typography and spacing across devices.

---

## Accessibility & Semantics
- Uses proper heading hierarchy (`h1` → `h2` → `h3`)
- Form inputs are associated with labels using `for` attributes
- Error messages tied to inputs via `aria-describedby`
- Pages are **fully keyboard navigable**
- Clear focus indicators for interactive elements

---

## Styling
- Shared navigation bar with consistent branding and a subtle blue underline accent.
- Unified **layout styling** across all pages:
  - Clean and minimal UI
  - Adaptive spacing and typography
  - Mobile-first responsive design
- CSS organized in `styles.css` for global consistency.

---

## Tech Stack
- **HTML5** – Semantic markup
- **CSS3** – Responsive, mobile-first styling
- **JavaScript (Vanilla)** – Validation and dynamic form handling

---

## Responsiveness
Tested across:
- Mobile devices (min-width: 350px)
- Tablets
- Desktop screens