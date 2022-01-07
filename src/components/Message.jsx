import { TrashIcon } from '@heroicons/react/solid';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import moment from 'moment';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { selectChannelId } from '../features/channelReducer';
import { auth, db } from '../firebase';

const Message = ({id ,messages, timestamp, name, email, photoUrl, }) => {
    const [user] = useAuthState(auth)
    const channelId = useSelector(selectChannelId)
    
    return (
        <div className='flex items-center p-1 pl-5 my-5 mr-2 hover:bg-discord_messageBg group'>
            <img src={photoUrl} alt="" className='h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl'/>
            <div className='flex flex-col'>
                <h4 className='flex items-center space-x-2 font-medium '>
                    <span className='hover:underline text-white text-sm cursor-pointer'>{name}</span>
                    <span className='text-discord_chatHeaderIcons text-xs'>
                        {moment(timestamp?.toDate().getTime()).format('lll')}</span>
                </h4>
                <p className='text-sm text-discord_chatInputText'>{messages}</p>
            </div>
            {user?.email === email && (
                <div className='hover:bg-[#ed4245] p-1 ml-auto rounded-sm text-[#ed4245] hover:text-white cursor-pointer' 
                onClick={()=> deleteDoc(doc(db, 'channels', channelId ,'messages', id))}>
                    <TrashIcon className='h-5 hidden group-hover:inline'/>
                </div>
            )}
        </div>
    )
}

export default Message
