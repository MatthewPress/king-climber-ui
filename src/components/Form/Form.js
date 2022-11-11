import React, { useState } from 'react';

import './Form.css';

function Form() {
  const [values, setValues] = useState({
    climber_id: "",
    date: "",
    location: "",
    climb_type: "",
    climb_grade: "",
    climb_description: ""
  })

  return (
    <form>
        <label htmlFor="climber_id">
          Climber
          <select>
            <option value=""></option>
          </select>
        </label>
        <label htmlFor="date">
          Date
          <input 
            type="date"
            name="date"
          />
        </label>
        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
          />
        </label>
        <label htmlFor="location">
          Location
          <select>
            <option value=""></option>
          </select>
        </label>
        <label htmlFor="climb_type">
          Climb Type
          <select>
            <option value=""></option>
          </select>
        </label>
        <label htmlFor="climb_grade">
          Climb Grade
          <select>
            <option value=""></option>
          </select>
        </label>
      <button type="submit">ADD COMP</button>
    </form>
  )
}

export default Form;