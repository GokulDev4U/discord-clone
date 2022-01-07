import { HashtagIcon } from '@heroicons/react/solid';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setChannelInfo } from '../features/channelReducer';

const Channel = ({id,channelName}) => {
    const dispatch = useDispatch();
    const navigate= useNavigate();

    const setChannel =()=>{
        dispatch(setChannelInfo({
            channelId : id,
            channelName: channelName,
        }))
        
        navigate(`/channels/${id}`)
    }
    return (
        <div className='font-medium flex item-center cursor-pointer hover:bg-discord_serverNameHoverBg p-1 rounded-md hover:text-white'
        onClick={setChannel}
        >
            <HashtagIcon className='h-5 mr-2' />{channelName}
        </div>
    )
}

export default Channel
