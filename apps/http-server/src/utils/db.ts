import { prismaClient } from "@repo/prisma/client";


export async function dbConnect() {
    try{
        await prismaClient.$connect();
        console.log("DB connected successfully");
    }catch(error){  
        console.log("db error",error);
        process.exit(1);
    }
}