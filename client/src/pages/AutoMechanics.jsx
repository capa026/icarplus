const AutoMechanics = ({ auto_mechanics }) => {
  if (!auto_mechanics) return 'Loading...';
  return (
    <div className="auto__mechanics">
      {auto_mechanics.map((person) => (
        <div key={person.id} className="auto__mechanic">
          <img src={person.profile_picture} alt="" />
          <h3>
            {person.first_name} {person.last_name}
          </h3>
          <span>{person.description}</span>
        </div>
      ))}
    </div>
  );
};
export default AutoMechanics;
