import API from "./api"

// signup customer
export const login=async (body)=>{
    try{
        const response=await API.post("/api/admin/login", body);
        return response;
    }catch(e){
        console.error(e);
        return null;
    }
    
}