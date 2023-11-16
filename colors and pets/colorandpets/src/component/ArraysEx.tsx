import React, { useState } from "react";

interface Pet {
  name: string;
  type: string;
  id: number;
}

const ArraysEx: React.FC = () => {
  const [colors, setColors] = useState<string[]>(["red", "orange", "yellow"]);

  const [pets, setPets] = useState<Pet[]>([
    { name: "Opal", type: "cat", id: 1 },
    { name: "James", type: "cat", id: 2 },
    { name: "Sophie", type: "squid", id: 3 },
  ]);

  const addColor = (color: string): void => {
    setColors((prevColors) => [...prevColors, color]);
  };

  const deletePet = (id: number): void => {
    setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
  };

  return (
    <div>
      <h3>Colors</h3>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <button onClick={() => addColor("green")}>Add Green</button>
      <button onClick={() => addColor("blue")}>Add Blue</button>
      <button onClick={() => addColor("violet")}>Add Violet</button>

      <h3>Pets</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>
                <button onClick={() => deletePet(pet.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArraysEx;
