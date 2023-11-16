import { useFetch } from '../utils/useFetch';
const AutoMechanics = () => {
  const { data, isLoading } = useFetch(
    import.meta.env.VITE_LOCAL_AUTO_MECHANICS_DB_URL
  );

  if (isLoading) return 'Loading...';

  return (
    <div className="auto__mechanics">
      {data.map((person) => (
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
