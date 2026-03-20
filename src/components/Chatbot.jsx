import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me about Varshini 👋", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;

    let response = "I can tell you about her AI projects, skills, and achievements!";

    if (input.toLowerCase().includes("project")) {
      response = "She built AI systems like Legal Assistant, Vision Aid & Disease Detection.";
    } else if (input.toLowerCase().includes("skills")) {
      response = "Python, ML, DL, NLP, Generative AI, LangChain, FastAPI.";
    } else if (input.toLowerCase().includes("achievements")) {
      response = "1st Place Project Expo, Japan Design Expo, Hackathon Top 10.";
    }

    setMessages([...messages, { text: input, sender: "user" }, { text: response, sender: "bot" }]);
    setInput("");
  };

  return (
    <div style={styles.chat}>
      <div style={styles.box}>
        {messages.map((msg, i) => (
          <div key={i} style={msg.sender === "bot" ? styles.bot : styles.user}>
            {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.inputArea}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          style={styles.input}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  chat: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "300px",
    background: "#020617",
    color: "white",
    borderRadius: "10px",
    padding: "10px",
  },
  box: {
    height: "200px",
    overflowY: "auto",
  },
  bot: { color: "#38bdf8", margin: "5px 0" },
  user: { textAlign: "right", margin: "5px 0" },
  inputArea: { display: "flex", gap: "5px" },
  input: { flex: 1 },
};