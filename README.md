# **🚀 Create Lex App - The Fastest Way to Build Lex Apps**  

### **Pre-built Authentication, User Dashboard, Routes & Lex Dev Tools**  
**A powerful React & TypeScript template for building Lex apps in minutes.**  

![Lex App Banner](https://i.imgur.com/tQ5pvY6.png)  

---

## **🔹 What’s Inside?**
This template is built with **modern web technologies** and comes **pre-configured** with:  
✅ **React 18 + Vite** (Fast, optimized frontend framework)  
✅ **Lex Developer Tools** (`@finosync/lex-dev-core`) for in-app debugging  
✅ **Pre-built User Authentication using Auth0**  
✅ **MongoDB integration for data storage**  
✅ **Tailwind CSS for styling & responsive design**  
✅ **Pre-built Dashboard & Routing system**  
✅ **TypeScript for strict type safety**  
✅ **.env.example** - All required environment variables pre-configured  

---

## **🚀 Quick Start**
### **1️⃣ Install & Create a New Lex App**
```sh
npx @finosync/create-lex-app my-lex-app
```
or globally:  
```sh
npm i -g @finosync/create-lex-app
create-lex-app my-lex-app
```

### **2️⃣ Navigate into your new project**
```sh
cd my-lex-app
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Start Development Server**
```sh
npm run dev
```

---

## **🚀 How to Create a Lex App?**
Creating a Lex app is simple and requires just a few steps:

### **1️⃣ Run the Command**
No need to specify a name—just run:
```sh
npx @finosync/create-lex-app
```

### **2️⃣ Enter Your Project Name**
You'll be prompted to enter a **name** for your project. Choose a relevant name like:
```
MyLexApp
```

### **3️⃣ Select Your Framework**
When prompted, choose:
```
React-TS (React with TypeScript)
```
This will generate a **fully configured Lex app**  

### **4️⃣ Navigate to Your New Project**
```sh
cd my-lex-app
```

### **5️⃣ Install Dependencies**
```sh
npm install
```

### **6️⃣ Add Required Environment Variables**
Before running the app, update your **`.env` file** with **Auth0** and other required settings:

```ini
# Auth0 Configuration
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id

# MongoDB Configuration
VITE_MONGO_URI=mongodb+srv://your-user:your-password@cluster.mongodb.net/your-db

# Lex Dev Tools (Enable/Disable)
VITE_LEX_DEV_MODE=true
```

### **7️⃣ Start Your App**
Once you've added the required environment variables, start the development server:
```sh
npm run dev
```

---

## **📖 Need More Help?**
If you're unsure about how to set up **Auth0**, configure the **dashboard**, or manage environment variables, visit our **Quick Start Guide**:

🔗 **[Lex Quick Start Documentation](https://lex.finosync.com/documentation/quickstart)**  

---

## **🛠️ Features**
### **🔥 Instant App Setup**
- **React 18 + Vite-powered development**
- **Pre-built authentication** using **Auth0**
- **User dashboard & navigation pre-configured**
- **Lex Dev Tools** for debugging & development
- **Pre-configured environment variables (`.env.example`)**
- **MongoDB database integration**  

### **💡 Seamless Developer Experience**
- **TypeScript for strong typing & error prevention**
- **TailwindCSS for rapid styling**
- **Lex Developer Tools (`@finosync/lex-dev-core`)**
- **Heroicons & Framer Motion for UI animations**  

---

## **📂 Project Structure**
When you run `npx @finosync/create-lex-app my-lex-app`, it generates:

```
my-lex-app/
├── dist/                     # Production build output (generated)
├── node_modules/             # Installed dependencies (generated)
├── public/                   # Static assets (index.html, icons, etc.)
├── src/                      # Source code
│   ├── backend/config/       # Contains lex.config.ts for enabling Lex Dev Tools
│   ├── backend/database/     # MongoDB database connection
│   ├── components/           # Shared UI components
│   ├── pages/                # Page-based routing system
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   ├── index.css             # Global styles
├── .env.example              # Environment variables reference
├── .gitignore                # Files to ignore in Git
├── eslint.config.js          # ESLint configuration
├── index.html                # Root HTML file
├── lex.dev.tsx               # Lex Dev Tools configuration
├── LICENSE                   # MIT License
├── package.json              # Project dependencies
├── package-lock.json         # Lock file for package dependencies
├── README.md                 # This file
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # TypeScript config for app
├── tsconfig.node.json        # TypeScript config for Node.js
├── vite.config.ts            # Vite configuration
```

---

## **📝 Configuration**
### **🔧 Update Your `.env` File**
After creating your Lex app, update the `.env` file:  

```ini
# Auth0 Configuration
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id

# MongoDB Configuration
VITE_MONGO_URI=mongodb+srv://your-user:your-password@cluster.mongodb.net/your-db

# Lex Dev Tools (Enable/Disable)
VITE_LEX_DEV_MODE=true
```

---

## **💡 How to Enable Lex Developer Tools?**
Lex Dev Tools (`@finosync/lex-dev-core`) is **already included** in your Lex App.  
To **enable it**, modify `src/backend/config/lex.config.ts`:  

```ts
export const LexConfig = {
  isDevMode: import.meta.env.VITE_LEX_DEV_MODE === "true", // ✅ Enable in dev mode
  enableDevTools: true, // ✅ Enable Lex Dev Tools
  enableLogging: true, // ✅ Optional: Enable logging for debugging
};
```

---

## **📦 Dependencies**
This template includes the following **pre-installed** dependencies:  

```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "@finosync/lex-dev-core": "^1.0.0",
  "@heroicons/react": "^2.2.0",
  "framer-motion": "^12.4.1",
  "mongoose": "^6.3.1",
  "express": "^4.18.2"
},
"devDependencies": {
  "@vitejs/plugin-react": "^4.3.4",
  "tailwindcss": "^4.0.3",
  "typescript": "~5.6.2",
  "vite": "^6.0.5"
}
```

---

## **📚 Documentation**
📖 Full Documentation: **[FinoSync Docs](https://lex.finosync.com/documentation/get-started/)**  

---

## **🤝 Contributing**
Lex App is **open-source & community-driven**.  
If you’d like to contribute, feel free to **open issues, submit PRs, or suggest features**.  

---

## **💰 Support & Sponsorship**
💙 If you find this project useful, consider sponsoring it to support development:  
- **[Buy Me a Coffee](https://buymeacoffee.com/finosynccorp)**  
- **[GitHub Sponsors](https://github.com/sponsors/FinoSyncCorp)**  

---

## **🛡️ License**
This project is licensed under the **MIT License** - Free for personal & commercial use.

🔹 **Built & Maintained by [FinoSync](https://finosync.com)**  
🔹 **Join our community on [Discord](https://discord.gg/2A4beVbR)**  

---

🔥 **Start building with Lex today!** 🚀  

---