// ✅ `src/backend/config/lex.config.ts`
export const LexConfig = {
  isDevMode: import.meta.env.MODE === "development", // ✅ Checks if running in dev mode
  enableDevTools: true, // ✅ Enable or disable LexDev dynamically
  enableLogging: true, // ✅ Optional: Enable logging for debugging
};
