import { Movie } from '../../interfaces';
import Link from 'next/link';
import Image from "next/image";
import { ReactNode } from 'react';

async function getData(id: string) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: process.env.THEMOVIEDATABASE_API as string,
      },
      next: {
        revalidate: 60,
      }
    }
  )
  return url.json();
}

export default async function MovieId({ params, children }: { children: ReactNode, params: { id: string } }) {
  const data: Movie = await getData(params.id)
  return (
    <div className="min-h-screen p-10">
      <div className="h-[40vh] relative">
        <Image fill src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="Image of movie" className="object-cover w-full rounded-lg" />
      </div>
      <h2 className='text-4xl font-bold text-center pt-5'>{data.title}</h2>
      <div className='flex gap-x-10 mt-10'>
        <div className='w-1/2 font-medium'>
          <h2>
            <span className='underline'>HomePage:</span>
            <Link href={data.homepage} target="_blank" >Link</Link>
          </h2>
          <h2>
            <span className='underline'>Original Language:</span> {data.original_language}
          </h2>
          <p><span className='underline'>Overview:</span>{data.overview}</p>
          <p><span className='underline'>Release Date:</span>{data.release_date}</p>
        </div>

        <div className='w-1/2'>
          {children}
        </div>

      </div>
    </div>

  )
}