import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import axios from 'axios';

import TextContainer from '../TextContainer/text-container.component.js';
import Messages from '../Messages/messages.component.js';
import InfoBar from '../InfoBar/info-bar.component.js';
import Input from '../Input/input.component.js';

import './chat.component.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:9000';
  
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    axios.get(`http://localhost:5000/messages/room/${room}`)
    .then(res => {
      const mongoMessages = res.data;
      if (mongoMessages.length >= 1) {
        let lastMongoMsg = mongoMessages[mongoMessages.length - 1]
        let newMsg = {
          user: lastMongoMsg.senderName,
          text: lastMongoMsg.message
        }
        setMessages(messages => [ newMsg, ...messages ]);
      }
    })

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
  });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    const newMessage = {
      room: room,
      senderName: name,
      message: message
    }

    axios.post('http://localhost:5000/messages/add', newMessage)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;