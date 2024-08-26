
import Video from './Video';
import { Link } from 'react-router-dom';
import useVideosList from '../../hooks/UseVideosList';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function Videos() {

    const [page, setPage] = useState(1);
    const { error, loading, videos, hasMore } = useVideosList(page);
    

    return(
            <div>
                {videos.length > 0 && (
                    <InfiniteScroll 
                       dataLength={videos.length}
                       hasMore={hasMore}
                       next={() => setPage(page => page + 1)}
                       loader="Loading..."
                       >
                         {videos.map((video) => (
                            <Link to={{
                                pathname: `/Quiz/${video.youtubeID}`,
                                state: {
                                    videoTitle: video.title
                                }
                            }} key={video.youtubeID}>
                               <Video title={video.title} id={video.youtubeID} noq={video.noq} key={video.youtubeID} />
                            </Link>
                         ))}
                    </InfiniteScroll>)}
                {!loading && videos.length === 0 && (
                    <div>No data found!</div>
                )}
                {error && <div>There was an error!</div>}
                {loading && <div>Loading...</div>}
            </div>
    );
}
