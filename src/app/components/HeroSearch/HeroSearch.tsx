"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Autosuggest from "react-autosuggest";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

import { useMutation } from "react-query";
import { searchListApi } from "@/fetchers/api";

export function useSearchListMutation() {
  return useMutation(
    ({ url, payload }: { url: string; payload: { key: string } }) =>
      searchListApi(url, payload)
  );
}

type HeroSearchProps = {
  name: string;
  placeholder: string;
  setKeyword: Dispatch<SetStateAction<string>>;
};

const HeroSearch = ({ name, placeholder, setKeyword }: HeroSearchProps) => {
  const { mutate, data, isLoading, isError, error } = useSearchListMutation();
  const url = `enduser/event/list-for-searchbox`;
  let query: string;

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Store the timeout ID for clearing on the next input event
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const getSuggestionValue = (suggestion: { title: string; key: string }) =>
    suggestion.title;

  const renderSuggestion = (suggestion: { title: string; key: string }) => (
    <div onClick={() => setKeyword(suggestion.title)}>
      {suggestion.title} - {suggestion.key}
    </div>
  );

  // const getSuggestions = (value: string) => {
  //   const inputValue = value.trim().toLowerCase();
  //   const inputLength = inputValue.length;

  //   return inputLength === 0
  //     ? []
  //     : data.filter(
  //         (data) => data.title.toLowerCase().slice(0, inputLength) === inputValue
  //       );
  // };

  const handleChange = (
    event: React.FormEvent<HTMLElement>,
    { newValue }: { newValue: string }
  ) => {
    setValue(newValue); // Update value state on user input

    // Clear the previous timeout if there's one
    if (typingTimeout) clearTimeout(typingTimeout);

    // Set a new timeout
    const newTimeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      mutate({ url, payload: { key: newValue.toLowerCase() } });
    }, 300); // Delay of 300ms

    // Save the new timeout ID
    setTypingTimeout(newTimeout);

    // const params = new URLSearchParams(searchParams);
    // // when the user types a new search query, reset the page number to 1.
    // params.set("page", "1");
    // mutate({ url, query: newValue.toLowerCase() });
    // // newValue ? params.set("query", newValue) : params.delete("query");
    // // replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (data) {
      setSuggestions(data?.data);
    }
  }, [data]);

  useEffect(() => {
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, []); // Empty dependency array to run only on component unmount

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(data.data || []); // Update suggestions state based on user input
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]); // Clear suggestions state when needed
  };

  console.log(suggestions);

  return (
    <div className="block sm:flex  justify-between items-center gap-40 pb-8">
      <p className="font-serif font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-none text-primary">
        {name}
      </p>
      <div className="relative mt-6 sm:mt-0 max-w-[600px] w-full flex-auto">
        <Autosuggest
          multiSection={false}
          suggestions={suggestions} // Pass current suggestions to Autosuggest
          onSuggestionsFetchRequested={onSuggestionsFetchRequested} // Required prop for react-autosuggest
          getSuggestionValue={getSuggestionValue} // Function to return the value for each suggestion
          renderSuggestion={renderSuggestion} // Function to render each suggestion
          inputProps={{
            placeholder: placeholder,
            value, // Pass current value to the input field
            onChange: handleChange, // Update value state on input change
          }}
          onSuggestionsClearRequested={onSuggestionsClearRequested} // Required prop for react-autosuggest
        />
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none pr-3">
          <Image src="/icons/search.svg" width={25} height={25} alt="icon" />
        </div>
      </div>
    </div>
  );
};
export default HeroSearch;
