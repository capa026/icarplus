import { useFetch } from '../utils/useFetch';
const AutoMechanics = () => {
  const { data, isLoading } = useFetch(
    import.meta.env.VITE_LOCAL_AUTO_MECHANICS_DB_URL
  );

  if (isLoading) return 'Loading...';
  console.log(data);
  return <div>AutoMechanics</div>;
};
export default AutoMechanics;
