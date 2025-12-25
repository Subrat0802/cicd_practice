import express from "express";
import { prismaClient } from "@repo/prisma/client";
import { dbConnect } from "./utils/db";

const app = express();
app.use(express.json());
dbConnect();

app.post("/signup",async (req, res) => {
    try{
        const {username, password} = req.body;
        const response = await prismaClient.user.create({
            data:{
                username,
                password
            }
        })

        if(!response){
            return res.status(400).json({
                message:"Error while signup",
                success:false
            })
        }

        return res.status(200).json({
            message:"Signup successfull",
            success:true,
            data: response
        })

    }catch(error){
        return res.status(500).json({
            message:"server error",
            success:false,
            error
        })
    }
})


app.post("/users", async (req, res) => {
    try{
        const {username} = req.body;
        const response = await prismaClient.user.findMany();

        if(!response){
            return res.status(400).json({
                message:"Error while getting all users",
                success:false
            })
        }

        return res.status(200).json({
            message:"Signup successfull",
            success:true,
            data: response
        })

    }catch(error){
        return res.status(500).json({
            message:"server error",
            success:false,
            error
        })
    }
})




app.get("/", (req, res) => {
    try{
        res.send("Hello from backend")
    }catch(error){
        res.json({
            message:"Error root"
        })
    }
})

app.listen(3001, () => {
    try{
        console.log("You are connected with port 3001")
    }catch(error){
        console.log("Error while connecting to port");
    }
})