import mongoose  from  "mongoose";
 

const ConnectDB= async () =>{

    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/StudentCard");
        console.log("mongoDB Connected")
    }
    catch{
        console.log("mongoDB not connected");
    }
}
export default ConnectDB