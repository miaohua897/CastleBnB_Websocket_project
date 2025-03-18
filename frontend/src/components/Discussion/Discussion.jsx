import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import './Discussion.css';

function Discussion() {
        const navigate = useNavigate();
        const sessionUser = useSelector(state => state.session.user);
        const [message, setMessage] = useState({});
        const [messages, setMessages] = useState([]);

        const socket = io('https://castlebnb-websocket-project.onrender.com', {
          transports: ["websocket"],
        });
        useEffect(() => {
          connectSocket();
        }, []);
        useEffect(()=>{
          if (!sessionUser) {
            navigate('/')
            return ;
          }
        },[sessionUser])
      function connectSocket() {
        socket.on("connection", (socket) => {
          console.log(socket);
        });
      }
    
      function handleInput(event) {
        let { name, value } = event.target;
        let currentObj = { [name]: value,'user':sessionUser.username };
    
        setMessage((prev) => ({ ...prev, ...currentObj }));
      }
    
      function sendMessages() {
        socket.emit("messages", message);
        socket.on("allMessages", (allMessages) => {
          setMessages(allMessages);
        });
      }

      return (
        <>
          <h1>Share your thoughts</h1>
          <div className="send-content-container">
              <input
                    name='content'
                    onChange={handleInput}
                    className="input-field"
                    placeholder="Message"
                  />    
              <button className="submit-button" onClick={sendMessages}>
                Submit
              </button>
          </div>
          {messages.length > 0 ? 
           messages.map((message,index)=>{
            return (
                    <div key={index} className="messages-container">
                        <div>
                        <strong>User:  </strong> <p>{message.user}</p>
                        </div>
                        <div>
                          <strong>Content:  </strong> <p>{message.content}</p>
                        </div>    
                    </div>)})       
                        : (
                          <p>post your first message</p>
                        )}
         </>
             );
  }
    
export default Discussion;