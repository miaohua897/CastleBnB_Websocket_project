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
        // const socket = io('http://localhost:8000', {
        //   transports: ["websocket"],
        // });
        useEffect(() => {
          connectSocket();
        }, []);
      
        if (!sessionUser) {
          navigate('/')
          return ;
        }
   
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
                    placeholder="I want to say ..."
                  />    
              <button className="submit-button" onClick={sendMessages}>
                share my thoughs
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
                          <h2>post your first message</h2>
                        )}
         </>
             );
  }
    
export default Discussion;