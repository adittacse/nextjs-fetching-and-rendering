import React from "react";

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-start">
            {/* message */}
            <div>
                <p className="text-gray-800 font-medium">
                    {feedback?.message}
                </p>

                {/* time */}
                <p className="text-gray-500 text-sm mt-1">
                    {new Date(feedback?.date).toLocaleDateString()}, {" "} {new Date(feedback?.date).toLocaleTimeString()}
                </p>
            </div>

            {/* buttons */}
            <div className="flex gap-2">
                <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">
                    Update
                </button>
                <button className="px-3 py-1 text-sm bg-red-500 text-white rounded">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FeedbackCard;