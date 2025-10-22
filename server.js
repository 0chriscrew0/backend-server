const express = require("express");
const app = express();
const PORT = 8383;

const data = {
  name: "chris",
};

app.get("/", (req, res) => {
  res.send(`
        <body>
            <h1>DATA</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
    `);
});

app.get("/dashboard", (req, res) => {
  res.send("<h1>Dashboard</h1>");
});

app.get("/api/data", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
