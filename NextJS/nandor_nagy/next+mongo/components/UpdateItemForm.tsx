// components/UpdateItemForm.tsx

import { useState } from 'react';

type Props = {
  initialData: { name: string; description: string };
  onUpdateItem: (item: { name: string; description: string }) => void;
};

const UpdateItemForm: React.FC<Props> = ({ initialData, onUpdateItem }) => {
  const [name, setName] = useState(initialData.name);
  const [description, setDescription] = useState(initialData.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateItem({ name, description });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Item Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          rows={3}
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Update
      </button>
    </form>
  );
};

export default UpdateItemForm;
