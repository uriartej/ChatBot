import { connect } from "mongoose";
import { disconnect } from "process";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL)
    } catch (error) { 
        console.log(error);
        throw new Error ("couldn't connect to MongoDB");
    }
}

async function disconnectFromDatabase() {
    try{
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("couldn't disconect from MongoDB");
    }
}

export {connectToDatabase, disconnectFromDatabase};