
import { FacebookShareButton, TwitterShareButton } from 'react-share';


const ShareButtons = ({url, title}) => {
    return (
        <div className='space-y-3'>
            <FacebookShareButton url={url} >
                Sheare on faceBook
            </FacebookShareButton>
            <TwitterShareButton title={title}>
                Sheare on faceBook
            </TwitterShareButton>
        </div>
    );
};

export default ShareButtons;