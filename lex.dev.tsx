import React, { useEffect, useState } from "react";
import { LexConfig } from "./src/backend/config/lex.config";

const LexDevFramework: React.FC = () => {
  const [DevTools, setDevTools] = useState<JSX.Element | null>(null);

  useEffect(() => {
    console.log("🚀 Checking if LexDev should load...");

    if (LexConfig.isDevMode && LexConfig.enableDevTools) {
      console.log("✅ LexDev enabled! Loading...");

      import("@finosync/lex-dev-core/dist/dev/LexDev")
        .then(({ default: LexDev }) => {
          console.log("✅ LexDev Loaded! Injecting into UI...");
          setDevTools(<LexDev />);
        })
        .catch((error) => {
          console.error("❌ Error loading LexDev:", error);
        });
    } else {
      console.warn("⚠️ LexDev is disabled in config.");
    }
  }, []);

  return (
    <div id="lex-dev-container">
      {DevTools ? (
        <>
        
          {DevTools}
        </>
      ) : (
        <p className="text-gray-400">🔄 Loading LexDev...</p>
      )}
    </div>
  );
};

export default LexDevFramework;
