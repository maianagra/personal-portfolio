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
        headers: { "Content-Type": "application/json" },
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
    <div className="bg-background text-text p-8 rounded-2xl max-w-2xl mx-auto shadow-md">
      <h1 className="font-playfair text-3xl font-semibold text-primary italic mb-6 text-center">
        Maia Chatbot
      </h1>

      <textarea
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me about Maia..."
        className="w-full p-3 rounded-lg bg-surface text-text border border-accent focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-accent"
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="mt-4 px-6 py-2 rounded-lg text-background bg-primary hover:bg-primary-light disabled:opacity-60 transition-all duration-300"
      >
        {loading ? "Sending..." : "Send"}
      </button>

      {response && (
        <div className="mt-6 bg-surface p-4 rounded-lg border border-accent">
          <strong className="text-primary block mb-2">Response:</strong>
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
