import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

ErrorContainer.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  handleReload: PropTypes.func.isRequired
}

ErrorContainer.defaultProps = {
  errorMessage: "Sorry, we could load the page. You could try reloading."
}