import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) return;

    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://finalyearprojectbackend-2gsq.onrender.com/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userInput: input }),
        }
      );
      const data = await response.json();
      setMessages([
        ...messages,
        userMessage,
        { role: "bot", text: data.response },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg h-[80vh] flex flex-col">
      <h1 className="text-2xl font-semibold text-center mb-4">Foodie Ai</h1>
      <div className="chat-history flex-1 overflow-y-auto space-y-3 mb-4 border-b border-gray-200 pb-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`text-sm leading-6 p-3 rounded-lg max-w-3/4 ${
              msg.role === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-black self-start"
            }`}
            dangerouslySetInnerHTML={{
              __html: msg.text.replace(/\n/g, "<br />"),
            }}
          />
        ))}
      </div>
      {loading && <div className="text-center text-gray-500 mb-3">Loading...</div>}
      <form onSubmit={sendMessage} className="flex items-center space-x-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your message"
          className="flex-1 p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white text-base rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
