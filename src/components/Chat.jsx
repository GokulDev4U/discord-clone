import { HashtagIcon,  } from '@heroicons/react/outline';
import { BellIcon, ChatIcon,SearchCircleIcon, InboxIcon, QuestionMarkCircleIcon, UsersIcon, PlusCircleIcon, GiftIcon, EmojiHappyIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../features/channelReducer';
import { auth, db } from '../firebase';
import { addDoc, collection, orderBy, query, serverTimestamp } from "firebase/firestore"; 
import Message from './Message';


const Chat = () => {
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [user] = useAuthState(auth)
    const [messages] = useCollection(channelId && query(collection(db, 'channels', channelId ,'messages'), orderBy('timestamp',"asc")))
    const inputRef = useRef()
    const chatRef = useRef()

    const scrollToBottom =()=>{
        chatRef.current.scrollIntoView({
            behavior : "smooth",
            block:'start',
        })
    }

    const sendMessage=(e)=>{
        e.preventDefault();
        let channelMessage = inputRef.current.value;
        const createChannelMessage = async (channelMessage) => {
            if (channelMessage !== ""){
                await addDoc(collection(db, 'channels', channelId ,'messages'), {
                    timestamp: serverTimestamp(),
                    messages : channelMessage,
                    name : user?.displayName,
                    photoUrl : user?.photoURL,
                    email : user?.email,
                  });
            }
            inputRef.current.value ="";
            scrollToBottom();  
        }
        createChannelMessage(channelMessage);
       
    }
    return (
        <div className='flex flex-col h-screen'>

            <header className='flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1'>
                <div className='flex items-center space-x-1'>
                    <HashtagIcon className='h-6 text-discord_chatHeaderIcons'/>
                    <h4 className='text-white font-semibold'>{channelName}</h4>
                </div>
                <div className='flex items-center space-x-3'>
                    <BellIcon className='icon'/>
                    <ChatIcon className='icon'/>
                    <UsersIcon className='icon'/>
        
                    <div className='flex bg-discord_serversBg text-xs p-1 rounded-md'>
                        <input type="text"  placeholder='Search' className='bg-transparent focus:outline-none text-white pl-1 placeholder-discord_chatHeaderIcons'/>
                        <SearchCircleIcon className='h-4 text-discord_chatHeaderIcons mr-1'/>
                    </div>
                    <InboxIcon className='icon'/>
                    <QuestionMarkCircleIcon className='icon'/>
                </div>
            </header>

            <main className='flex-grow overflow-y-scroll scrollbar-hide'>
                {messages?.docs.map(doc => {
                    const {messages, timestamp, name, photoUrl, email} = doc.data();
                    return <Message key={doc.id} id={doc.id} messages={messages} timestamp={timestamp} name={name} photoUrl={photoUrl} email={email}/>
                })}
                <div ref={chatRef} className='pb-16 '/>
            </main>

            <div className='flex items-center p-2.5 bg-discord_chatInputBg mx-5 mb-7 rounded-lg'>
                <PlusCircleIcon className='icon mr-4'/>
                <form className='flex-grow'>
                    <input type="text" name="" id="" disabled={!channelId} placeholder={channelId ? `Message #${channelName}` : "Select a channel"}
                    className='bg-transparent focus:outline-none text-discord_chatInputText w-full placeholder-discord_chatHeaderIcons text-sm' ref={inputRef}/>
                    <button hidden type='submit' onClick={sendMessage}>
                        Send
                    </button>
                </form>
                <GiftIcon className='icon mr-2'/>
                <EmojiHappyIcon className='icon'/>
            </div>

        </div>
    )
}

export default Chat
