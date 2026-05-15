export default function Card({ title, description,icon:Icon }) {
  return (
    <div className="card">
      
      <h3><Icon className="card-icon" /> {title}</h3>
      <p>{description}</p>
    </div>
  );
}