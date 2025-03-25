import mongoose from "mongoose";

let connected = false;

const connectDB = async()=>{
    mongoose.set('strictQuery', true);
    // if the db is already connected then dont connect again 
    if(connected){
        console.log('MongoDb is connected');
        return
        
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true;
    } catch (error) {
        console.log(error);
         
    }
}

export default connectDB;