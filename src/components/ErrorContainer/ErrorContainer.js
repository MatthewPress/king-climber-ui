import { Link } from 'react-router-dom';

import './ErrorContainer.css';

const ErrorContainer = ({ errorMessage, handleReload }) => {
  return (
    <section className="page--container">
      <div className="resource-message--container">
        <p className="resource-message">{errorMessage}</p>
      </div>
      <div className="resource-button--container">
        <Link to="/">
          <button className="resource--button" onClick={() => handleReload()}>
            Retry
          </button>
        </Link>
      </div>
    </section>
  )
}

export default ErrorContainer;