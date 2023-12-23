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

const HeroSearch = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(languages);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const pageName = pathname.split("/").filter((path) => path)[0];
  const capitalized = pageName.charAt(0).toUpperCase() + pageName.slice(1);

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
    <div className="block sm:flex  justify-between items-center gap-40">
      <p className="font-serif font-light text-xl sm:text-4xl md:text-5xl lg:text-6xl flex-none">
        Our {capitalized}
      </p>
      <div className="relative pt-6 sm:pt-0 max-w-[600px] w-full flex-auto">
        <Autosuggest
          multiSection={false}
          suggestions={suggestions} // Pass current suggestions to Autosuggest
          onSuggestionsFetchRequested={onSuggestionsFetchRequested} // Required prop for react-autosuggest
          getSuggestionValue={getSuggestionValue} // Function to return the value for each suggestion
          renderSuggestion={renderSuggestion} // Function to render each suggestion
          inputProps={{
            placeholder: `Search ${capitalized}`,
            value, // Pass current value to the input field
            onChange: handleChange, // Update value state on input change
          }}
          onSuggestionsClearRequested={onSuggestionsClearRequested} // Required prop for react-autosuggest
        />
        <div className="absolute bottom-1/4 right-0 pointer-events-none pr-3 pt-5 sm:pt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default HeroSearch;
