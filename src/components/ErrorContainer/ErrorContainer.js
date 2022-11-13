import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './ErrorContainer.css';

const ErrorContainer = ({ errorMessage }) => {
  return (
    <section className="page--container">
      <p className="resource-message">{errorMessage}</p>
    </section>
  )
}

export default ErrorContainer;

ErrorContainer.propTypes = {
  errorMessage: PropTypes.string.isRequired
}

ErrorContainer.defaultProps = {
  errorMessage: "We could not load data. You could try reloading."
}