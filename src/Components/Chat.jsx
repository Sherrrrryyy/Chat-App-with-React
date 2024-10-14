import { addDoc, collection, query, where, onSnapshot, } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { db } from "../databse/firebaseconfig"
import moment from "moment";


export default function Chat() {

    const navigate = useNavigate()
    const { state } = useLocation()
    const [message, setMessage] = useState()
    const [chat, setChat] = useState([])
    const [chatList, setChatList] = useState([])

    const myUid = localStorage.getItem("user")

    useEffect(() => {
        const q = query(collection(db, "chat"), where(state.user, "==", true), where(myUid, "==", true));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const list = [];
            querySnapshot.forEach((doc) => {
                list.push(doc.data());
            });
            setChat(list);
            console.log(list);
            const sortList = list.sort((a, b) => a.createdAt - b.createdAt)
                setChatList(sortList)
        });
        return () => unsubscribe();
    }, []);


const sendMessage = async () => {
    await addDoc(collection(db, "chat"), {
      message,
      [state.user]: true,
      [myUid]: true,
      sender: myUid,
      createdAt: Date.now()
    });
    setMessage("");
  };


  return (
    <>
      <div className="bg-red-800 p-4 shadow-lg">
        <div className="text-white text-2xl font-bold container mx-auto flex justify-between items-center">
          {state.name}
        </div>
      </div>

      <div className="p-4">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === myUid ? "justify-end" : "justify-start"} mb-4`}
          >
            <div
              className={`p-3 rounded-lg text-white max-w-xs ${
                msg.sender === myUid ? "bg-blue-500" : "bg-gray-500"
              }`}>
              {msg.message}
              <h1 className="text-gray-700">{moment(msg.createdAt).startOf('seconds').fromNow()}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 w-full p-4 flex items-center justify-center bg-white">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="w-3/4 py-2 px-4 mr-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </>
  );
}

