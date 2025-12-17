import type { User } from '../types/User';

interface UserListProps {
    users: User[];
}

const userList = ({users} : UserListProps) => {
    let liUsers = users.map(user => {
        return (
            <li key={user.id}>
                {user.nome} - {user.email || 'Email not provided'}
            </li>
        )
    });

    return (
        <div>
            <ul>
                {liUsers}
            </ul>
        </div>
    )
}

export default userList;