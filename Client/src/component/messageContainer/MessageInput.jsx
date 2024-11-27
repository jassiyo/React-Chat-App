import React from "react";
import { IoMdSend } from "react-icons/io";


const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          className="border rounded text-sm rounder-lg bloc w-full p-2.5 bg-gray-700 border-gray-600 text-white"
        />
        <button type="submit" className="absolute inset-y-3 end-0 flex item-center pe-3">
            <IoMdSend className="text-white" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;