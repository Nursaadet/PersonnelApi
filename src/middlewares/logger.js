"use strict";

const morgan = require("morgan");
const fs = require("node:fs");
const path = require("node:path");

if (process.env.NODE_ENV === "production") {
  // Production (Render) → console log
  module.exports = morgan("combined");
} else {
  // Local development → file log

  const logDir = path.join(__dirname, "../../logs");

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  const today = new Date().toISOString().split("T")[0];

  module.exports = morgan("combined", {
    stream: fs.createWriteStream(
      path.join(logDir, `${today}.log`),
      { flags: "a+" }
    ),
  });
}

