import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";


function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")
  const [submittedData, setSubmittedData] = useState([])

  //const items = []
  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      id: uuid(),
      name: name,
      category: category
    }
    onItemFormSubmit(formData)
    const updatedFormData = [...submittedData, formData]
    onItemFormSubmit(formData)
    setSubmittedData(updatedFormData)
    setName("")
    setCategory("")
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
