# 🧑‍💼 Employee Management System

This is the **frontend** of an Employee Management System built using modern web technologies. The application allows an **Admin** to manage employees and their assigned tasks efficiently.

---

## 🚀 Features

- 🔐 Admin login and authentication
- 👥 View all employees
- ➕ Add, ✏️ Edit, and ❌ Delete employee records
- ✅ Assign tasks to employees
- 📊 Track task status (Pending, In Progress, Completed)
- 📱 Fully responsive UI
- 🧼 Clean and intuitive user experience

---

## 🛠️ Tech Stack

- **React.js** – Frontend library
- **Tailwind CSS** – Styling and layout
- **React Router DOM** – Page navigation
- **Axios** – API requests
- **Vite** – Lightning-fast dev server and bundler
- **Redux Toolkit** – State management

---

## 📁 Project Structure 
```
EMS/
├─ public/          # Static assets like favicon, icons, images, etc.
├─ src/
│  ├─ components/   # Reusable UI elements (e.g., Button, Form, Header)
│  ├─ features/     # Application logic (e.g., Auth, Theme slices)
│  ├─ pages/        # Route-level views (e.g., Home, Admin, Dashboard)
│  ├─ store/        # Global state setup using Redux Toolkit
│  ├─ App.jsx       # Main React app component
│  └─ main.jsx      # Entry point for rendering the React app
├─ .gitignore       # Specifies files and folders to exclude from Git
├─ index.html       # Main HTML template loaded by Vite
├─ package.json     # Project dependencies and configuration
├─ README.md        # Project overview and documentation
├─ vite.config.js   # Vite bundler and development server settings
└─ LICENSE          # MIT License for open-source use
```


## ⚙️ Setup Instructions

1. Clone the repo
  ``` bash
  git clone https://github.com/Subhas6033/Employee-Management-System.git

  cd Employee-Management-System
  ```


2. Install dependencies
  ``` bash
  npm install
   ```

   
3. Configure environment variables
   
   Create a ```.env``` file in the root directory and add:
  ``` bash
  VITE_API_BASE_URL= your api endpoint
  ```
   
4. Start the development server
  ``` bash
  npm run dev
  ```

   
5.  Build for production
  ``` bash
  npm run build
  ```

## 🧪 Future Improvements
- Role-based access control
- Notification system
- Search and filter features
- Employee analytics dashboard

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## 📬 Contact

If you have any questions, suggestions, or would like to collaborate, feel free to reach out:

- 📧 Email: [sm2733@it.jgec.ac.in](mailto:sm2733@it.jgec.ac.in)  
- 💼 LinkedIn: [Subhas Mondal](https://www.linkedin.com/in/subhas-mondal-bubai6033/) 
- 🐙 GitHub: [Subhas6033](https://github.com/Subhas6033)


## 📄 License

This project is licensed under the [MIT License](LICENSE).

