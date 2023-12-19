"use client";

const languages = [
  {
    name: "C",
    location: 'Yangon',
  },
  {
    name: "C#",
    location: 'Yanngon',
  },
  {
    name: "C++",
    location: 'Mandalay',
  },
  {
    name: "Clojure",
    location: 'Mandalay',
  },
  {
    name: "Elm",
    location: 'Pathein',
  },
  {
    name: "Go",
    location: 'Pathein',
  },
  {
    name: "Haskell",
    location: 'Bago',
  },
  {
    name: "Java",
    location: 'Bago',
  },
  {
    name: "Javascript",
    location: 'Yangon',
  },
  {
    name: "Perl",
    location: 'Yangon',
  },
  {
    name: "PHP",
    location: 'Yangon',
  },
  {
    name: "Python",
    location: 'Mandalay',
  },
  {
    name: "Ruby",
    location: 'Pathien',
  },
  {
    name: "Scala",
    location: 'Bago',
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

  function renderSectionTitle(section) {
    return (
      <strong>{section.location}</strong>
    );
  }

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
    <div className="flex justify-between items-center gap-40">
      <p className="font-serif font-light text-xl sm:text-4xl md:text-5xl lg:text-6xl flex-none">
        Our {capitalized}
      </p>
      <div className="relative hidden md:block max-w-[600px] w-full flex-auto">
        <Autosuggest
          multiSection={false}
          suggestions={suggestions} // Pass current suggestions to Autosuggest
          onSuggestionsFetchRequested={onSuggestionsFetchRequested} // Required prop for react-autosuggest
          getSuggestionValue={getSuggestionValue} // Function to return the value for each suggestion
          renderSuggestion={renderSuggestion} // Function to render each suggestion
          renderSectionTitle={renderSectionTitle} // Function to render reach section
          inputProps={{
            placeholder: `Search ${capitalized}`,
            value, // Pass current value to the input field
            onChange: handleChange, // Update value state on input change
          }}
          
          onSuggestionsClearRequested={onSuggestionsClearRequested} // Required prop for react-autosuggest
        />
        <div className="absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none pr-6">
          <svg
            className="w-6 h-6 text-primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default HeroSearch;