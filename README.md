# Developer Portfolio

Welcome to my Developer Portfolio! This project showcases my skills and experience through an interactive, visually appealing web application built with React, Three.js, and Tailwind CSS. It also features email functionality using EmailJS to allow visitors to reach out to me directly.

## Features

- **Interactive 3D elements**: Built using Three.js for a unique and engaging experience.
- **Responsive design**: Tailwind CSS ensures the portfolio looks great on all devices.
- **Email functionality**: Visitors can send messages via a contact form powered by EmailJS.
- **Modern UI/UX**: Designed with user experience in mind, focusing on simplicity and ease of navigation.

## Tech Stack

- **React**: JavaScript library for building the user interface.
- **Three.js**: JavaScript library to create 3D graphics and animations.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **EmailJS**: Service for sending emails directly from the front end without needing a backend server.

## Getting Started

To view and run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/rishang19dx/Portfolio.git
```

### 2. Install dependencies

Navigate into the project directory and install the required dependencies:

```bash
cd Portfolio
npm install
```

### 3. Set up EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Set up a new email service and get the **service ID**, **template ID**, and **user ID**.
3. Create a `.env` file in the root of your project and add the following variables:

```env
REACT_APP_EMAILJS_USER_ID=your_user_id
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

### 4. Run the development server

```bash
npm start
```
or 
```bash
npm run dev
```

This will start the development server, and you can access the portfolio at `http://localhost:3000`.

---
Thanks !
