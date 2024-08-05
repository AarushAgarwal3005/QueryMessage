import mongoose from "mongoose";
type ConnectionObject={
    isConnected?:number
}
const connection: ConnectionObject={}
async function dbConnect():Promise<void> {/*here void means i dont care whattype of data return is comming */
    if(connection.isConnected){
        console.log("already connected to database")//in nextjs we have to check first if there is already connection establioshed 
        return
    }
    try{
const db= await mongoose.connect(process.env.MONGODB_URI || ' ',{})
connection.isConnected=db.connections[0].readyState
console.log(db)
console.log(db.connections)
console.log("Db connected succesfully")
    }
    catch(error){
        console.log("db connection failed",error)
process.exit()

    }
    
}
export default dbConnect; 