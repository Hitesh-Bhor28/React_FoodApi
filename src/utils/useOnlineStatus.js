import { useEffect } from "react";
import { useState } from "react"

const useOnlineStatus = ()=>{
    const [isOnline, setIsOnline] = useState(true)

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnline(true);
        })
        window.addEventListener("offline",()=>{
            setIsOnline(false);
        })  
    },[])


    return isOnline;
}

export default useOnlineStatus