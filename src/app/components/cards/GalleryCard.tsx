import React from 'react'
import Image from 'next/image'
import Paragraph from "../common/Text/Paragraph";
import LinkBtn from "@/app/components/button/LinkBtn"
interface GalleryCardProps {
    info: {
        id: number,
        title: string,
        artist: string,
        size: string,
        isAvailable?: boolean,
        thumbnail: string,
        routeUrl?: string
    }
}

const GalleryCard = ({ info }: Props) => {
  return (
    <div className="relative border p-2">
        <Image 
            src={info?.thumbnail} 
            width={500}
            height={500} 
            alt={info?.title} 
            priority={true}
            className={'bg-indigo-100 object-cover object-center flex items-center justify-center mx-auto'} 
        />
        <div className="py-8 px-3">
            <h2 className="text-primary text-xl font-semibold mb-4">{info?.title}</h2>
            <div className="flex justify-between w-full items-center">
                <div>
                    <p className="text-xs text-primary mb-2">by Artist {info?.artist}</p>
                    <p className="text-xs text-primary leading-tight">{info?.size}</p>
                </div>
                {
                    info?.available && (
                        <div className={`py-4 px-7 ${info?.isAvailable ? 'bg-success' :'bg-error'} text-white text-xs tracking-wider`}>
                            {info?.isAvailable ? "Available" : "Sold out"}
                        </div>
                    )
                }
                <LinkBtn className="text-primary text-xs tracking-wider" href={`/gallery/${info?.id}`} mobileText="More Detail" dtText="More Detail" />
            </div>
        </div>
    </div>
  )
}

export default GalleryCard