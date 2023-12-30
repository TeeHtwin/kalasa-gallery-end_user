"use client";

const languages = [
  {
    name: "C",
    location: "Yangon",
  },
  {
    name: "C#",
    location: "Yanngon",
  },
  {
    name: "C++",
    location: "Mandalay",
  },
  {
    name: "Clojure",
    location: "Mandalay",
  },
  {
    name: "Elm",
    location: "Pathein",
  },
  {
    name: "Go",
    location: "Pathein",
  },
  {
    name: "Haskell",
    location: "Bago",
  },
  {
    name: "Java",
    location: "Bago",
  },
  {
    name: "Javascript",
    location: "Yangon",
  },
  {
    name: "Perl",
    location: "Yangon",
  },
  {
    name: "PHP",
    location: "Yangon",
  },
  {
    name: "Python",
    location: "Mandalay",
  },
  {
    name: "Ruby",
    location: "Pathien",
  },
  {
    name: "Scala",
    location: "Bago",
  },
];

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Autosuggest from "react-autosuggest";
import { useState } from "react";
import Image from "next/image";

type HeroSearchProps = {
  name: string;
  placeholder: string;
};

const HeroSearch = ({ name, placeholder }: HeroSearchProps) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(languages);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : languages.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const handleChange = (event, { newValue }) => {
    setValue(newValue); // Update value state on user input
    const params = new URLSearchParams(searchParams);
    // when the user types a new search query, reset the page number to 1.
    params.set("page", "1");
    newValue ? params.set("query", newValue) : params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value)); // Update suggestions state based on user input
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]); // Clear suggestions state when needed
  };

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
