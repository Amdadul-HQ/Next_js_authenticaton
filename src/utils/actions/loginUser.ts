"use server"

export const loginUser = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/login`,{
        method:"POST",
        headers:{
            
        }
    })
    return 
}