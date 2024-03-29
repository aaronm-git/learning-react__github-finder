import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;
    if (loading) {
        return <Spinner />;
    } else if (!users.length) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <p>No Users Found</p>
            </div>
        );
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
    gap: '1rem'
};

export default Users;
