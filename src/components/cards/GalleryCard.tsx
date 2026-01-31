import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Artwork } from "@/types";

const GalleryCard = ({ info }: { info: Artwork }) => {
  return (
    <Link
      href={`/artworks/${info?.id}`}
      className="group block focus:outline-none"
    >
      <div className="mb-3 break-inside-avoid md:mb-4 lg:mb-6">
        <div className="overflow-hidden rounded-xl border border-primary/15 bg-white transition group-hover:border-primary/30 group-focus-visible:ring-2 group-focus-visible:ring-primary/40">
          <div className="overflow-hidden">
            <Image
              src={info?.image}
              width={640}
              height={800}
              quality={50}
              alt={info?.name}
              blurDataURL={info?.image}
              placeholder="blur"
              className="w-full bg-[#efe7d4] object-cover object-center"
            />
          </div>
          <div className="border-t bg-primary-light/50 border-primary/10 px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="text-primary text-[17px] font-semibold leading-snug">
                  {info?.name}
                </h2>
                <p className="mt-1 text-[14.5px] font-medium text-primary/90">
                  {info?.artist?.name ?? "Unknown artist"}
                </p>
                <p className="mt-1 text-[12.5px] text-primary/65">
                  {info?.size}
                </p>
              </div>
              <span
                className={`inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.16em] ${
                  info?.sold
                    ? "border-error/30 bg-error/10 text-error"
                    : "border-success/30 bg-success/10 text-success"
                }`}
              >
                {info?.sold ? "Sold" : "Available"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;
