import dotenv from 'dotenv';
import express, {Request, Response} from "express";
import bodyParser from 'body-parser';

//routes
//import securityRoutes from './authentication/routes';
import contentRoutes from './content/routes';

//Loading environment variables
dotenv.config();

//Express app
const app = express();
const PORT = process.env.PORT || 3000;

//adding necessary middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Defining routes
//app.use('/bouncer', securityRoutes); will be done later
app.use('/OtakuReaper', contentRoutes);

//Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("READY! 👍");
});