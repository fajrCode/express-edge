import "dotenv/config";
import { app } from "./configs/app.js";
import listEndpoints from 'express-list-endpoints';

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

try {
    if (process.env.NODE_ENV == "development") {
        console.log("================== API - LIST =======================");
        listEndpoints(app).forEach((route) => {
            route.methods.forEach((method) => {
                console.log(`Route => ${method} ${route.path}`);
            });
        });
        console.log("================== API - LIST =======================\n");
    };

    app.listen(port, () => {
        console.log(`🚀 Server is on ${host}:${port}`);
    });
} catch (error) {
    console.log(`Error: ${error.message}`);
}