import express, { Request, Response } from "express";
import path from "node:path";
import fs from "fs";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "@/routes/api";
import { connectToDb } from "@/Utility/connection";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// =============================
//         🔧 Middleware
// =============================
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow server-to-server or curl
    if (origin.startsWith("http://localhost")) {
      return callback(null, true); // ✅ allow any localhost:* origin
    }
    if (origin === "https://codequest-notes.netlify.app/") {
      return callback(null, true); // ✅ allow production frontend
    }
    return callback(new Error("Not allowed by CORS")); // ❌ deny all else
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false
}));



// =============================
//         📦 API Routes
// =============================
app.use("/api", apiRoutes);

// =============================
//     🩺 Health Check Route
// =============================
app.get("/api/test", (_req: Request, res: Response) => {
  res.status(200).json({ status: "alive" });
});

// =============================
//     🖼️  Static Frontend Serve
// =============================

// ✅ Only serve static frontend if client build exists (for monorepo/local use)
// Only attach wildcard route in local or monorepo mode
const isLocalMonorepo = fs.existsSync(path.join(process.cwd(), "../client/dist"));

if (isLocalMonorepo) {
  const clientPath = path.join(process.cwd(), "../client/dist");
  app.use(express.static(clientPath));

  app.get("*", (req: Request, res: Response) => {
    if (req.path.startsWith("/api")) {
      res.status(404).send("API route not found.");
      return;
    }

    const indexPath = path.join(clientPath, "index.html");
    res.sendFile(indexPath);
  });
} else {
  // ✅ No frontend present — allow Render to just serve the backend
  app.get("*", (req: Request, res: Response) => {
    if (req.path.startsWith("/api")) {
      res.status(404).send("API route not found.");
    } else {
      res.status(200).send("🧠 Backend API only — frontend not served from this instance.");
    }
  });
}



// =============================
//       🚀 Start Server
// =============================
const main = async () => {
  try {
    await connectToDb();
    console.log("✅ Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
  }
};

main().catch(err => console.error("❌ Unexpected error:", err));
