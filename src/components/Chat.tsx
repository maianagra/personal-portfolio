import React, { useState } from "react";

const Chat: React.FC = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse("");

    const chatbot_url =
      import.meta.env?.VITE_CHATBOT_URL ||
      "https://maia-portfolio-chatbot.onrender.com/chat";

    try {
      const res = await fetch(chatbot_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      console.error(err);
      setResponse("⚠️ Something went wrong, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Maia Chatbot</h1>
      <textarea
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me about Maia..."
      />
      <br />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;
