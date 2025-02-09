# **🚀 Create Lex App - The Fastest Way to Build Lex Apps**  

### **Pre-built Authentication, User Dashboard, Routes & Lex Dev Tools**  
**A powerful React & TypeScript template for building Lex apps in minutes.**  

![Lex App Banner](https://i.imgur.com/tQ5pvY6.png)  

---

## **🔹 What’s Inside?**
This template comes **pre-configured** with:  
✅ **Lex Developer Tools** (`@finosync/lex-dev-core`)  
✅ **Pre-built User Authentication (Auth0)**  
✅ **Pre-built Dashboard & Routing**  
✅ **TypeScript & TailwindCSS**  
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

## **🛠️ Features**
### **🔥 Instant App Setup**
- **Pre-built authentication** using **Auth0**
- **User dashboard & navigation pre-configured**
- **Lex Dev Tools** for debugging & development
- **Pre-configured environment variables (`.env.example`)**
  
### **💡 Seamless Developer Experience**
- **React 18 + TypeScript**
- **Vite-powered development**
- **TailwindCSS for styling**
- **Lex Developer Tools (`@finosync/lex-dev-core`)**
- **Heroicons & Framer Motion for UI animations**  

---

## **📂 Project Structure**
When you run `npx @finosync/create-lex-app my-lex-app`, it generates:

```
my-lex-app/
├── src/
│   ├── backend/config/      # Contains lex.config.ts for enabling Lex Dev Tools
│   ├── components/          # Shared UI components
│   ├── pages/               # Page-based routing system
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
├── .env.example             # Environment variables reference
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── README.md                # This file
```

---

## **📝 Configuration**
### **🔧 Update Your `.env` File**
After creating your Lex app, update the `.env` file:  

```ini
# Auth0 Configuration
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id

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
  "framer-motion": "^12.4.1"
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

## **🔄 Next Steps**
Now that your template is **ready to go**, you can:  
✅ Push this to **GitHub**  
✅ Publish it as **`create-lex-app`** on **npm**  
✅ Promote it in the **Lex community** 🚀  

This README is **structured, clear, and beginner-friendly** while keeping the **Lex vision** intact. Let me know if you'd like to tweak anything! 🔥
