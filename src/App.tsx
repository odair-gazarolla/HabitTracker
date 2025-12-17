import CustomButton1 from './componets/CustomButton1';
import customButton2 from './componets/CustomButton2';
import customButton3 from './componets/CustomButton3';
import type { User } from './types/User';
import './App.css'

// List of users
const users: User[] = [
  { id: 1, nome: 'John Doe', email:'jd@email.com'},
  { id: 2, nome: 'Jane Smith', email: ''},
  { id: 3, nome: 'Alice Johnson', email: 'ajo@email.com'},
  { id: 4, nome: 'Bob Brown', email: '' }, // User without email
  { id: 5, nome: 'Charlie Davis after type user', email: 'cd@email.com'}
];

const listUsers = users.map(user => {
  return (
    <ul>
      <li key={user.id}>
        {user.nome} - {user.email || 'Email not provided'}
      </li>
    </ul>
  );
});

function App() {
  return (
    <>
      <div>
        <p>Let's start from the <h1>Stone Age</h1></p>
        <div className='buttons-box'>
          <CustomButton1 />
          { customButton2() }
          { customButton3 }
        </div>
        <div>
          <h2>User List:</h2>
          {listUsers}
        </div>
      </div>
    </>
  )
}

export default App
