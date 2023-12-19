const express = require ('express')
const app = express();
// const MONGO_URL = "mongodb+srv://uzair:BCGoKwvfyFUSIn3L@cluster0.zrjubhl.mongodb.net/?retryWrites=true&w=majority"
// const MONGO_URL = "mongodb+srv://aminaaslam985:amina123@cluster0.w7bvzq1.mongodb.net/?w=majority"
const MONGO_URL = "mongodb://103.18.20.49:3029/"


const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
const helmet = require ('helmet');
const morgan = require ('morgan');

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL, (err)=>{
    if(err){
        console.log("Unable to Connect" , err);
    } else{
        console.log("Connected to MongoDB");
    }
})

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
//middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users' , userRoute);
app.use('/api/auth' , authRoute);
app.use('/api/posts' , postsRoute);

dotenv.config();

app.listen(8800, ()=>{
    console.log("Backend Server is running");
})
