import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, CircularProgress } from "@mui/material";
import { Send } from "@mui/icons-material";

function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [context, setContext] = useState("");
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const styles = {
    chatbotContainer: {
      width: "400px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "500px",
    },
    chatWindow: {
      flex: 1,
      overflowY: "auto",
      padding: "10px",
      marginBottom: "20px",
      height: "80%",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxSizing: "border-box",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      borderTop: "1px solid #ddd",
      backgroundColor: "#fff",
      borderRadius: "8px",
    },
    inputField: {
      flex: 1,
      marginRight: "10px",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "14px",
    },
    sendButton: {
      padding: "10px 15px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
    },
    messageBubble: {
      maxWidth: "60%",
      margin: "10px 0",
      padding: "10px",
      borderRadius: "10px",
      backgroundColor: "#e5e5e5",
      display: "inline-block",
      fontSize: "14px",
      wordWrap: "break-word",
      position: "relative",
    },
    userMessage: {
      backgroundColor: "#007BFF",
      color: "#fff",
      alignSelf: "flex-end",
    },
    botMessage: {
      backgroundColor: "#f1f1f1",
      color: "#000",
      alignSelf: "flex-start",
    },
    botImage: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    loadingIndicator: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px 0",
    },
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Display user's question first
    setResponses([...responses, { user: userInput, bot: "Loading..." }]);
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/chat", {
        user_input: userInput,
        context: context,
      });

      setResponses([
        ...responses,
        { user: userInput, bot: response.data.response },
      ]);
      setContext(response.data.context);
      setIsLoading(false);
      setUserInput(""); // Clear input field
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error generating response.");
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission if Enter is pressed
      handleSendMessage();
    }
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatWindow}>
        {responses.map((response, index) => (
          <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
            {response.bot && (
              <div
                style={{
                  ...styles.messageBubble,
                  ...styles.botMessage,
                  display: "flex",
                }}
              >
                <img
                  src="./bot.avif" // Add your bot's image URL here
                  alt="Bot"
                  style={styles.botImage}
                />
                <p>{response.bot}</p>
              </div>
            )}
            {response.user && (
              <div style={{ ...styles.messageBubble, ...styles.userMessage }}>
                <p>{response.user}</p>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div style={styles.loadingIndicator}>
            <CircularProgress />
            <p style={{ marginLeft: "10px" }}>Generating response...</p>
          </div>
        )}
      </div>

      <div style={styles.inputContainer}>
        <TextField
          variant="outlined"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          style={styles.inputField}
        />
        <Button
          variant="contained"
          onClick={handleSendMessage}
          style={styles.sendButton}
          disabled={isLoading}
        >
          <Send />
        </Button>
      </div>
    </div>
  );
}

export default Chatbot;
