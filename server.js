import Config from "./src/Config";

var express = require("express");
const app = require("http").createServer(handler);
var server = require("http").Server(app);
const io = require("socket.io")(app);
const fs = require("fs");

var players = {};

app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

server.listen(8081, function () {
    console.log(`Listening on ${server.address().port}`);
});

io.on("connection", function (socket) {
    console.log("a user connected");

    players[socket.id] = {
        x: Math.floor(Math.random() * 700) + 50,
        y: Math.floor(Math.random() * 500) + 50,
        playerId: socket.id,
        team: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };

    // players 객체를 새로운 플레이어에게 보냄
    socket.emit("currentPlayers", players);

    // 새로운 플레이어를 다른 플레이어들에게 update
    socket.broadcast.emit("newPlayer", players[socket.id]);

    socket.on("disconnect", function () {
        console.log("user disconnected");

        // players 객체에서 player 제거
        delete players[socket.id];

        // 다른 플레이어들에게 해당 플레이어가 제거되었다는 것을 알림
        io.emit("_disconnect", socket.id);
    });

    // player가 움직일 때 player의 data를 업데이트
    socket.on("playerMovement", function (movementData) {
        players[socket.id].x = movementData.x;
        players[socket.id].y = movementData.y;
        // 모든 플레이어에게 player의 움직임을 알림
        socket.broadcast.emit("playerMoved", players[socket.id]);
    });
});
