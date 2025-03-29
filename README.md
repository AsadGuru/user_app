# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# React User Application

This project is a React-based web application that integrates with the Reqres API to manage users. The application includes authentication, displaying a list of users with pagination, and performing CRUD operations such as edit and delete.

# Login into the application
  email: 'eve.holt@reqres.in',  // Change this email
  password: 'cityslicka'  // Change this password

## Features

- **Authentication**: Allows users to log in using predefined credentials.
- **User List**: Displays a paginated list of users fetched from the Reqres API.
- **Edit User**: Users can edit a selected user's details such as first name, last name, and email.
- **Delete User**: Users can delete a user from the list.
- **Error Handling**: Displays appropriate messages for success and errors.
- **Responsive UI**: The UI is responsive and works well on both desktop and mobile devices.

## Technologies Used

- **React**: Frontend framework
- **Axios**: For HTTP requests
- **React Router**: For navigation between pages
- **CSS Framework**: Tailwind CSS (or your chosen framework, e.g., Bootstrap, Material UI)
- **LocalStorage**: For persisting the authentication token
- **React Hooks**: `useState`, `useEffect` for managing state and lifecycle methods

## Installation Instructions

1. Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/user-management-app.git
