import Player from '../player/player';
import './videoList.css';

const VideoList = () => {
    return(
        <div className='video__list__wrapper'>
            <h1>Трішки про те, яка ти в мене файна</h1>
            <div className="video__list">
                
                <Player videoName={'Greeting.mp4'}/>
            </div>
        </div>
    );
}

export default VideoList;