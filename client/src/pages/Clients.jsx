const Clients = ({ users }) => (
  <div className="">
    {users.map((user) => (
      <div key={user.id} className="">
        ID: {user.id} || Email: {user.email}
      </div>
    ))}
  </div>
);
export default Clients;
