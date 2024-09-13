import { addDoc, collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { db } from "../databse/firebaseconfig"
import { query, where, onSnapshot } from "firebase/firestore";


export default function Chat() {

    const navigate = useNavigate()
    const { state } = useLocation()
    const [message, setMessage] = useState()
    const [chat, setChat] = useState([])


    useEffect(() => {
       
            const q = query(collection(db, "chat"), where(state.user, "==", true), where(myUid, "==", true));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
              const list = []
            querySnapshot.forEach((doc)=>{
                list.push((doc.data()))
            })

            setChat(list)

            });

return unsubscribe()

    }, [])


const myUid = localStorage.getItem("user")

    const sendMessage = async ()=>{
        await addDoc(collection(db,"chat"), {
            message,
            [state.user] : true,
            [myUid] : true

        })
setMessage("")
    }


    return (

<>
    <div className="bg-gray-800 p-4 shadow-lg">
        <div className="text-white text-2xl font-bold container mx-auto flex justify-between items-center">
            {state.name}
        </div>
    </div>

    
    <div>
        
{chat.map( list =>{
       return (
        <div className="flex justify-between p-4 border-b border-gray-200">
        <h1  className=" items-center  text-lg flex font-medium">{list.message}</h1>
      </div>
       )
})}

    </div>

    <div className="fixed bottom-0 w-full p-4 flex items-center justify-center">
        <input 
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            type="text" 
            className="w-3/4 py-2 px-4 mr-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Type your message..."
        />
        <button 
            onClick={sendMessage} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Send
        </button>
    </div>
</>

    )

}

