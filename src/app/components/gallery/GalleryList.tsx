import React from 'react'
import GalleryCard from '../cards/GalleryCard'

interface GalleryListProps {
    data: {
        id: number,
        title: string,
        artist: string,
        size: string,
        isAvailable: boolean,
        thumbnail: string,
    }[]
}

const GalleryList = ({ data }: GalleryListProps) => {
  return (
    <div className="columns-1 xl:columns-3 md:columns-2 sm:columns-2 gap-2 space-y-4 mt-5 lg:mt-20">
        {
            data?.map((image, index) => (
                <GalleryCard key={index} info={image} />
            ))
        }
    </div>
  )
}

export default GalleryList