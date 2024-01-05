"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaVideo, FaRegSquareCaretRight, FaClapperboard } from "react-icons/fa6";

export default function Home() {
  /*
  - Fetch a list of all the videos

  */

  interface Video {
    id: string;
    title: string;
    author: string;
    description: string;
    release_date: string;
    url: string;
    created_at: string;
    updated_at: string;
  }

  interface AppError {
    name: string;
    message: string;
    stack?: string;
  }

  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/videos");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setVideos(data.results);
        setLoading(false);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);

        setError(message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className="bg-stone-50">
      
      <header className="h-12 bg-red-600 flex justify-left items-center text-white">
        <FaVideo className="ml-5 text-3xl" />
        <h1 className="ml-3 text-left text-lg">MyTube</h1>
      </header>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {videos.length > 0 && (
        <ul>
          {videos.map(video => (
            <li 
              key={video.id}
              className="w-4/5 mx-auto my-6 rounded-md shadow-md overflow-hidden flex flex-col text-gray-600"
            >
              <iframe
                title={video.title}
                // width="560"
                // height="315"
                src={video.url}
                frameBorder="0"
                allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="flex justify-left items-center gap-x-2 ml-2 mt-2">
                <FaClapperboard className="text-2xl" />
                <strong>{video.title}</strong> 
              </div>
              <p className="text-sm ml-2 mb-2">{video.author}</p>
              {/* <small>{video.release_date}</small> */}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
