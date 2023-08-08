import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../utils/firebase.js';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SingIn = () => {
    const [user, setUser] = useState({});

    const handleInput = () => {
        const inputName = event.target.name;
        setUser(prev => ({ ...prev, [inputName]: event.target.value }));
    }
    const handleSubmit = async () => {
        event.preventDefault();
        const user3 = { ...user };
        const referencia = await addDoc(collection(db, "users3"), user3);
        const actualizar = doc(db, "users3", referencia.id);
        await updateDoc(actualizar, {
            id: referencia.id,
        });
        // setList(prev => [...prev, {...user, id:referencia.id} ])

        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                console.log(auth);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <form className='flex gap-2 pt-[68px]' onSubmit={handleSubmit}>
            <input className='border p-2' type="text" name='nombre' onChange={handleInput} value={user.nombre || ''} placeholder='Nombre' />
            <input className='border p-2' type="text" name='apellido' onChange={handleInput} value={user.apellido || ''} placeholder='apellido' />
            <input className='border p-2' type="text" name='email' onChange={handleInput} value={user.email || ''} placeholder='email' />
            <input className='border p-2' type="text" name='phone' onChange={handleInput} value={user.phone || ''} placeholder='phone' />
            <input className='border p-2' type="password" name='password' minLength="6" onChange={handleInput} value={user.password || ''} placeholder='password' />
            <input className='border p-2' type="submit" />
        </form>
    )
  return (
    <div>SingIn</div>
  )
}

export default SingIn

