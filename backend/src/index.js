console.log("backend for Opnion!")

import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Database connection failed !!! ${error}`);
  });
