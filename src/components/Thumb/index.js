import React from 'react';
import { WrapperThumb, Thumb, Avatar } from './styles';

function ThumbVideo({ src, alt, avatar, channelName }) {
    return (
        <WrapperThumb>
            <Thumb src={src} alt={alt} />
            <Avatar src={avatar} alt={channelName} />
        </WrapperThumb>
    );
}

export default ThumbVideo;