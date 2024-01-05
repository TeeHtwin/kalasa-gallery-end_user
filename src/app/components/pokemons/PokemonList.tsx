"use client";

import { useState } from "react";
import fetchApi from "@/fetchers/api";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";

type CommentProps = {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
};

const PokemonList = () => {
  const { ref, inView } = useInView();
  const row_count = 15;
  const [page, setPage] = useState(1);
  const {
    data,
    isSuccess,
    hasNextPage,
    hasPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam = 1 }) => {},
    getNextPageParam: (lastPage, allPages) => {
      console.log("last page::", lastPage);
    },
    getPreviousPageParam: (firstPage, allPages) => {},
  });

  console.log("data::", data);
  return (
    <div className="h-auto w-full max-w-md p-5 mx-auto overflow-scroll"></div>
  );
};

export default PokemonList;
