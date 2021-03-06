import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import { useSelector } from 'react-redux';

const Page = styled.div`
  display: flex;
  align-items: center;
  margin: auto auto 0 auto;
  background-color: white;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 15px;
  padding: 5px;
  border: 1px solid black
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  height: 200px;
  overflow: auto;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 95%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  background-color: #69bef7;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #46516e;
  font-size: 17px;
`;

const Form = styled.form`
  width: 320px;
`;

const Span = styled.span`
  color: white
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: #69bef7;
  color: white;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: #69bef7;
  border: 1px solid #69bef7;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;

const Window = (props) => {
  const personalProfile = useSelector((state) => state.profile.personalProfile)
  const messageUser = useSelector((state) => state.profile.messageUser)
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("your id", id => {
      setYourID(id);
      socketRef.current.emit("register user", { username: personalProfile, id: id })
    })

    socketRef.current.on("message", (message) => {
      receivedMessage(message);
    })
  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      profile: personalProfile,
      friend: messageUser
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
    console.log(message)
  }

  return (
    <Page style={{ visibility: props.visibility, position: 'relative' }}>
      <p style={{fontSize: '1rem', fontFamily: 'sans-serif', margin: '5px 0'}}>{messageUser}</p> <span onClick={() => props.toggleVisibility('hidden')} style={{ position: 'absolute', top: 3, right: 10, cursor: 'pointer' , fontWeight: 'bold'}}>x</span>
      <Container>
        {messages.map((message, index) => {
          if (message.profile === personalProfile) {
            return (
              <MyRow key={index}>
                <MyMessage>
                  {message.body}
                </MyMessage>
              </MyRow>
            )
          }
          return (
            <PartnerRow key={index}>
              <PartnerMessage>
                {message.body}
              </PartnerMessage>
            </PartnerRow>
          )
        })}
      </Container>
      <Form onSubmit={sendMessage}>
        <TextArea value={message} onChange={handleChange} placeholder="Say something..." />
        <Button style={{ cursor: 'pointer' }}><Span>Send</Span></Button>
      </Form>
    </Page>
  );
};

export default Window;