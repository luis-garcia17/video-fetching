"use client";
import { useState, useEffect } from "react";
import { FaVideo, FaClapperboard } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Home() {
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

  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const router = useRouter();
  
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/videos")

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
      <header 
        className="
          h-12 
          bg-red-600 
          flex 
          justify-left 
          items-center 
          text-white"
      >
        <FaVideo className="ml-5 text-3xl" />
        <h1 className="ml-3 text-left text-lg"> MyTube </h1>
      </header>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {videos.length > 0 && (
        <ul className="lg:flex lg:flex-wrap lg:justify-around lg:gap-x-4">
          {videos.map(video => (
            <li
              key={video.id}
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
          ))}
        </ul>
      )}
    </main>
  );
}
