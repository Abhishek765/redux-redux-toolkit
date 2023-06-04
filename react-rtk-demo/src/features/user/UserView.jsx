import { useEffect } from 'react';
import { fetchUsers } from './userSlice';
import { useDispatch, useSelector } from 'react-redux';

const UserView = () => {
  const dispatch = useDispatch();
  const usersDetail = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {usersDetail?.loading && <p>Loading...</p>}
      {!usersDetail?.loading && usersDetail?.error && (
        <p>Error: {usersDetail.error}</p>
      )}
      {!usersDetail?.loading && usersDetail?.users.length > 0 ? (
        <ul>
          {usersDetail.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserView;
