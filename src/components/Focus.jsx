function Focus( { img, title, paragraph, alt }) {
  return (
    <div className="feature-item">
      <img src={img} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{paragraph}</p>
  </div>
  )
}

export default Focus