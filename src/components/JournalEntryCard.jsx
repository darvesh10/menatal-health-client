const JournalEntryCard = ({ id, date, text, mood, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow-sm border border-blue-100 relative">
      <p className="text-sm text-gray-500 mb-1">{date}</p>

      {/*  Show Mood */}
      {mood && (
        <p className="text-blue-600 text-sm font-medium mb-2">Mood: {mood}</p>
      )}

      <p className="text-gray-800">{text}</p>

      <button
        onClick={() => onDelete(id)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default JournalEntryCard;


  