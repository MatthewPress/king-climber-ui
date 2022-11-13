import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { postData } from '../../apiCalls/apiCalls';

import './Form.css';

function Form({ climbers }) {
  const [values, setValues] = useState({
    climber_id: "",
    date: "",
    location: "",
    climb_type: "",
    climb_grade: "",
    climb_description: ""
  });

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  }

  const addComp = (event) => {
    console.log(values);

    postData('/competitions', values)
      .catch((error) => {
        console.log("IDK");
      });
  }

  return (
    <main className="page--container">
      <form>
        <div className="form-field">
          <label htmlFor="climber_id">Climber</label>
          <select
            name="climber_id"
            onChange={handleChange}
          >
            {
              climbers.map((climber, index) => {
                return <option key={index} value={climber.id}>{climber.name}</option>
              })
            }
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="date">Date</label>
          <input 
            type="date"
            name="date"
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="location">Location</label>
          <select 
            name="location"
            onChange={handleChange}
          >
            <option value="Movement Baker">Movement Baker</option>
            <option value="Movement RiNo">Movement RiNo</option>
            <option value="Movement Englewood">Movement Englewood</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="climb_type">Climb Type</label>
          <select
            name="climb_type"
            onChange={handleChange}
          >
            <option value="Boulder">Boulder</option>
            <option value="Top Rope">Top Rope</option>
            <option value="Sport">Sport</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="climb_grade">Climb Grade</label>
          <select
            name="climb_grade"
            onChange={handleChange}
          >
            <option value="V1 / Green">V1 / Green</option>
            <option value="V2 / Green">V2 / Green</option>
            <option value="V3 / Yellow">V3 / Yellow</option>
            <option value="V4 / Yellow">V4 / Yellow</option>
            <option value="V5 / Orange">V5 / Orange</option>
            <option value="V6 / Pink">V6 / Pink</option>
            <option value="V7 / Pink">V7 / Pink</option>
            <option value="5.11a">5.11a</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="climb_description">Climb Description</label>
          <select
            name="climb_description"
            onChange={handleChange}
          >
            <option value="sloppy">Sloppy</option>
            <option value="crimpy">Crimpy</option>
          </select>
        </div> 
      </form>
      <button className="add-comp--button" onClick={(event) => addComp(event)} >ADD COMP</button>
    </main>
  )
}

export default Form;

Form.propTypes = {
  climbers: PropTypes.arrayOf(PropTypes.object)
}