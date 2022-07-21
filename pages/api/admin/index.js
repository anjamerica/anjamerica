import { createAdmin } from "../../../controllers/login";


export default async (req, res) => {

    
    switch (req.method) {

        case "GET":
            
                
                break;
            


        case "POST":
           await createAdmin(req, res)
            break;

        default:
            res.end();
    }
}
            


      