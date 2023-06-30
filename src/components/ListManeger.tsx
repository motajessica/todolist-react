// ListManager.tsx

import { useState } from "react";

interface List {
  id: number;
  name: string;
}

interface ListManagerProps {
  addList: (list: List) => void;
}

const ListManager: React.FC<ListManagerProps> = ({ addList }) => {
  const [listName, setListName] = useState("");

  const handleAddList = () => {
    if (listName.trim() !== "") {
      const newList: List = {
        id: Date.now(),
        name: listName,
      };
      addList(newList);
      setListName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder="Enter List Name"
      />
      <button onClick={handleAddList}>Add List</button>
    </div>
  );
};

export default ListManager;
