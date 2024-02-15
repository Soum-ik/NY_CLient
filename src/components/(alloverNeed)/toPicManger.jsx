/* eslint-disable react/prop-types */
import { Input } from "antd";
import { useState } from "react";

function TopicsManager({ topics, setTopics }) {
  const [newTopic, setNewTopic] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTopic = () => {
    if (newTopic.trim() !== "") {
      setTopics([...topics, newTopic]);
      setNewTopic("");
    }
  };

  const removeTopic = (index) => {
    setTopics(topics.filter((_, i) => i !== index));
  };

  const editTopic = (index) => {
    setNewTopic(topics[index]);
    setEditIndex(index);
  };

  const updateTopic = () => {
    const updatedTopics = [...topics];
    updatedTopics[editIndex] = newTopic;
    setTopics(updatedTopics);
    setNewTopic("");
    setEditIndex(null);
  };

  return (
    <div>
      <Input
        value={newTopic}
        onChange={(e) => setNewTopic(e.target.value)}
        placeholder="Add bullet point text"
      />
      <button
        onClick={editIndex !== null ? updateTopic : addTopic}
        className="border p-1 rounded mt-3"
      >
        {editIndex !== null ? "Update text" : "Add text"}
      </button>
      <ul>
        {topics?.map((topic, index) => (
          <div key={index} className="flex items-center">
            <li className="line-clamp-1 text-black/60">{topic}</li>
            <button
              className="ml-5 border p-1 rounded"
              onClick={() => removeTopic(index)}
            >
              Remove
            </button>
            <button
              className="ml-5 border p-1 rounded"
              onClick={() => editTopic(index)}
            >
              Edit
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TopicsManager;
