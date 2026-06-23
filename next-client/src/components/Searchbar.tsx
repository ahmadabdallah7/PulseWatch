"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Styling
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";

export default function Searchbar() {
  const router = useRouter();

  const [query, setQuery] = useState<string>("");

  function handleQuery(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleSearch(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (query !== "") {
      router.push("/service/" + encodeURIComponent(query.toLowerCase()));
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <form className="d-flex" onSubmit={handleSearch}>
            <div className="input-group">
              <input
                className="form-control search-bar form-control-lg"
                type="search"
                placeholder="Search for a service (e.g. Discord)"
                aria-label="Search"
                onChange={handleQuery}
              />
              <button className="btn btn-primary search-btn px-3" type="submit">
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
