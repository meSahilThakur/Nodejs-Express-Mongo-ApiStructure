const User = require('../models/userModel');

exports.createUser = async(req, res) => {
    try{                                        //we can extract data 90% cases with req.body(it is used for forms) or req.param(it can used when we want get data from link/url)
        const {name, email} = req.body;        //takes form data from frontend with help of req.body & destructure it then take {name, email}

        if(!name || !email){                   //checks whether name & email is not filled in form then gives error
            throw new Error("Name and Email are required")
        }

        const userExists = await User.findOne({email});         //checks whether email is already there or not in the database

        if(userExists){                                 //if the user already there then it gives the error
            throw new Error("Email already exists")
        }

        const user = await User.create({               //if user is not there in db then it creates a user
            name,
            email
        })

        res.status(200).json({                              //give response as json file so that we get the data in browser
            success:true,
            message:"User created Successfully",
            user
        })

    }catch(error){                          //it will process the logic by connecting with db, so it may fail to establish connection. so that we use try-catch block.
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}