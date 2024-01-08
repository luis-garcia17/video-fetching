"use client";
import { useState, useEffect } from "react";
import { FaVideo } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import YoutubeVideo from "@/components/YoutubeVideo";

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

      {videos.length > 0 && <ul>
        {videos.map((video) => (
          <YoutubeVideo video={video} key={video.id} />
        ))}
      </ul>}
    </main>
  );
}
