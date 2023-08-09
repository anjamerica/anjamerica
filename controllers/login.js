import Admin from "../models/admin";
import jsonwebtoken from "jsonwebtoken";
import getConfig from 'next/config'
import bcrypt from "bcryptjs"
var crypto = require('crypto');

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig } = getConfig()



/**
 * @method POST
 * @description To login,createAdmin
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 

 */

export const doLogin = async function (req, res) {
    try {

        //console.log(req.body);

        const email =req.body.email
        const password =req.body.password

        

        // api validation
        if (!email) {
            return res.status(400).json({ error: "email required", status: 400 })
        }
        if (!password) {
            return res.status(400).json({ error: "password required", status: 400 })
        }

        // // checking admin exist or not
        let existingAdmin = await Admin.findOne({ email });

        if (!existingAdmin) {
            return res.status(401).json({ error: "admin not found as!", status: 401 })
        }


    const isMatch= await bcrypt.compare(password,existingAdmin.password)

        if (isMatch==true) {
            // jwt setup
            let auth_token = jsonwebtoken.sign({ id: existingAdmin._id },serverRuntimeConfig.mySecret,{
                expiresIn: 2678400000 // 31 days
            });
            return res.status(200).json({ messasge:"logedIn",status: 200,token:auth_token});



        } else {
            res.status(401).json({ error: "password not matched", status: 401 })
        }
        

    } catch (e) {
        console.log(e)
        res.status(500).json({ status:500,error: "internal server error",errorMessage:e })
    }


}


export const checkLogedIn = async (req, res) => {
    try {


        const token = req.headers.authorization;

        

        if (!token) return res.status(401).json({ "error": "NoT authorized" })

       
        if (token == "null") {
            return res.status(200).send({ logedin: false, admin: null });
        }

        

          
        const {id} = jsonwebtoken.verify(token, serverRuntimeConfig.mySecret);
        
        const isUserExist = await Admin.findOne({ _id:id })
        
        const Data = {

            email: isUserExist.email,
            password: isUserExist.password
        }

        res.status(200).json({ logedin: true,admin:Data })
    } catch (e) {
       
        console.log(e);
        res.status(500).json({ status:500,error: "internal server error",errorMessage:e })
    }
}



export const createAdmin = async (req, res)=> {
    
        try {
            const { email, password } = req.body;


        

    const hashPassword =  bcrypt.hashSync(password,10);

            
            const newAdmin = await Admin.create({
                
                email,
                password: hashPassword
            
            })
            console.log(newAdmin)

            return res.status(200).json({ success:"admin created successfully",status:200,payload:newAdmin});
        } catch (e) {

            console.log(e);
        res.status(500).json({ status:500,error: "internal server error",errorMessage:e })
        }}
    