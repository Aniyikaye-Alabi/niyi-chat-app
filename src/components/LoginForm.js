import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "bc57caf5-ea22-474c-a975-e08212a11d31", 'User-Name': userName, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', {'headers': authObject});

            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            setError('Oops, incorrect credentials.');
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input className='input' type='text' value={userName} onChange={ (e) => setUserName(e.target.value) } placeholder='Username' required />
                    <input className='input' type='password' value={password} onChange={ (e) => setPassword(e.target.value) } placeholder='Password' required />

                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>

                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )

}
export default LoginForm;