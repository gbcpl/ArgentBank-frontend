import PropTypes from 'prop-types';

function Focus( { img, title, paragraph, alt }) {
  return (
    <div className="feature-item">
      <img src={img} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{paragraph}</p>
  </div>
  )
}

Focus.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  alt: PropTypes.string
}

export default Focus