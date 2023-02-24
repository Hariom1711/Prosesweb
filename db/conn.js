const mongoose=require("mongoose")

const DB="mongodb+srv://Hariomojha:Hariom2003@cluster0.88sab.mongodb.net/prosesweb?retryWrites=true&w=majority";


mongoose.connect(DB,{
    // useCreateIndex:true,
    // useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    try{
        console.log("connection start");
    }
    catch(e){
        console.log("error:",e)
    }
})