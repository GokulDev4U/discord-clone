import React from 'react'
import {MenuIcon} from '@heroicons/react/outline'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);
    const navigation = useNavigate();

    const signIn = (e)=>{
        e.preventDefault();
        
        signInWithPopup(auth,provider)
        .then((result)=>{
            navigation('/channels')
        }  
       )
        .catch((error)=> alert(error.message));
    }

    return (
        <header className='flex items-center justify-between py-4 px-6 bg-discord_blue'>
            <Link to="/">
                <img  src="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png" alt="" className='w-32 h-12 object-contain'/>
            </Link>

            <div className="hidden lg:flex  space-x-6 ">
                <a href='' className="link">Download</a>
                <a className="link">Why Discord?</a>
                <a className="link">Nitro</a>
                <a className="link">Safety</a>
                <a className="link">Support</a>
            </div>

            <div className="flex space-x-2">
                <button className='bg-white p-2 rounded-full text-xs md:text-sm px-4 focus-outline-none hover:shallow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium'
                onClick={!user ?  signIn : ()=> navigation('/channels')}
                >
                    {!user ? "Login" : "Open Discord"}
                </button>
            <MenuIcon className='h-9 text-white cursor-pointer lg:hidden'/>
            </div>

        </header>
    )
}

export default Header
