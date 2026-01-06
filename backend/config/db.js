import mongoose from "mongoose";

const DBCon= ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB ÇALIŞIYOR");
        
    } catch (error) {
        console.log("MONGODB HATASI",error);
    }
}
export default DBCon;