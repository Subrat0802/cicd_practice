import {WebSocketServer} from "ws";
import {prismaClient} from "@repo/prisma/client";

const wss = new WebSocketServer({port: 8080});

wss.on("connection", async (socket) => {
    const resposne = await prismaClient.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })

    socket.send("Hi there you are connected to server")
})