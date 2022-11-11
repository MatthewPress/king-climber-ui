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
            <option value="Ted">Ted</option>
            <option value="Matt">Matt</option>
            <option value="Logan">Logan</option>
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
          <select>
            <option value="Movement Baker">Movement Baker</option>
            <option value="Movement RiNo">Movement RiNo</option>
            <option value="Movement Englewood">Movement Englewood</option>
          </select>
        </label>
        <label htmlFor="climb_type">
          Climb Type
          <select>
            <option value="Boulder">Boulder</option>
            <option value="Top Rope">Top Rope</option>
            <option value="Sport">Sport</option>
          </select>
        </label>
        <label htmlFor="climb_grade">
          Climb Grade
          <select>
            <option value="V1 / Green">V1 / Green</option>
            <option value="V2 / Green">V2 / Green</option>
            <option value="V3 / Yellow">V3 / Yellow</option>
            <option value="V4 / Yellow">V4 / Yellow</option>
            <option value="V5 / Orange">V5 / Orange</option>
            <option value="V6 / Pink">V6 / Pink</option>
            <option value="V7 / Pink">V7 / Pink</option>
            <option value="5.11a">5.11a</option>
          </select>
        </label>
      <button type="submit">ADD COMP</button>
    </form>
  )
}

export default Form;