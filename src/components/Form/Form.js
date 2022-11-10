import './Form.css';

function Form() {
  return (
    <form>
      <label htmlFor="date">Date</label>
      <input 
        type="date"
        name="date"
      />
    </form>
  )
}

export default Form;