import { FaClapperboard } from "react-icons/fa6";

interface YoutubeVideo {
  id: string;
  title: string;
  author: string;
  description: string;
  release_date: string;
  url: string;
  created_at: string;
  updated_at: string;
}

const YoutubeVideo = ({ video }: { video: YoutubeVideo }): JSX.Element => {
  return (
        <li
          className="
            w-4/5 
            md:w-3/4
            lg:w-1/6
            mx-auto 
            my-6 
            rounded-md 
            shadow-md 
            overflow-hidden 
            flex 
            flex-col 
            md:flex-row
            lg:flex-col
            text-gray-600
          "
        >
          <iframe
            title={video.title}
            src={video.url}
            allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="flex flex-col justify-center md:items-center md:w-full lg:items-start gap-y-2">
            <div className="flex justify-left items-center gap-x-2 ml-2 mt-2">
              <FaClapperboard className="text-2xl" />
              <strong>{video.title}</strong>
            </div>
            <p className="text-sm ml-2 mb-2">{video.author}</p>
          </div>
        </li>
  );
};

export default YoutubeVideo;
