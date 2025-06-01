export default function ProductTile({ title, imageUrl }) {
  return (
    <div className="product-tile">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}
