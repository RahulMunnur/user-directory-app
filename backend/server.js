const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/users", async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required"
            });
        }

        const newUser = {
            id: Date.now(),
            name,
            email
        };

        users.push(newUser);

        res.status(201).json({
            message: "User added successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
});

app.get("/users", async (req, res) => {
    try {
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}); 

app.delete("/users/:id", async (req, res) => {

    try {

        const userId = parseInt(req.params.id);

        const userIndex = users.findIndex(
            (user) => user.id === userId
        );

        if (userIndex === -1) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        users.splice(userIndex, 1);

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }
});

app.put("/users/:id", async (req, res) => {

    try {

        const userId = parseInt(req.params.id);

        const { name, email } = req.body;

        const user = users.find(
            (user) => user.id === userId
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        user.name = name;
        user.email = email;

        res.status(200).json({
            message: "User updated successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});