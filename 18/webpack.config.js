const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { setMaxListeners } = require("events");
const bodyParser = require("body-parser");

const isProduction = process.env.NODE_ENV == "production";
const jsonParser = bodyParser.json();

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      const tasks = [
        { id: 2, text: "task 2", state: "finished" },
        { id: 1, text: "task 1", state: "active" },
      ];

      function generateNewId(tasks) {
        if (tasks.length === 0) return 1;
        const ids = tasks.map((task) => task.id);
        return Math.max(...ids) + 1;
      }

      devServer.app.get("/api/tasks", (req, res) => {
        res.json(tasks);
      });

      devServer.app.post("/api/tasks", jsonParser, function (req, res) {
        newTaskText = req.body;

        const newTaskId = generateNewId(tasks);
        const newTask = {
          id: newTaskId,
          ...newTaskText,
          state: "active",
        };

        tasks.push(newTask);
        res.status(201).json(newTask);
      });

      devServer.app.patch("/api/tasks/:id/finish", function (req, res) {
        const taskId = parseInt(req.params.id, 10);

        const task = tasks.find((task) => task.id === taskId);
        if (!task) {
          return res.status(404).json({ error: "Task not found" });
        }

        task.state = "finished";

        res.status(200).json(task);
      });

      devServer.app.patch("/api/tasks/:id/activate", function (req, res) {
        const taskId = parseInt(req.params.id, 10);

        const task = tasks.find((task) => task.id === taskId);
        if (!task) {
          return res.status(404).json({ error: "Task not found" });
        }

        task.state = "active";

        res.status(200).json(task);
      });

      return middlewares;
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
