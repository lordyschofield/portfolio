import { useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
}

const DEFAULT_USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  },
  {
    id: '3',
    name: 'Jim Doe',
    email: 'jim.doe@example.com',
  },
]

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setUsers(DEFAULT_USERS);
    }, 1000);
    return () => clearTimeout(timeoutID);
     
  }, []);

  return (
    <div>
      <h1>
        Users List
      </h1>
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <UserCard key={user.id} id={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  )
}

type UserCardProps = User;

function UserCard(props: UserCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-gray-200 p-4 rounded-md max-w-sm">
      <p>{props.id}</p>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div> 
  );
}