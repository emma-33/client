import "./Searchbar.css";
// import { useState, useRef, useMemo } from "react";
// const data = require("./mock-data.json");

function SearchBar() {
    /*
    const [items, setItems] = useState([data]);
    const [query, setQuery] = useState("");
    const inputRef  = useRef();

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            return item.toLowerCase().includes(query.toLowerCase())
        })
    }, [items, query]);

    function onSubmit(e) {
        e.preventDefault();
        
        const value = inputRef.current.value;
        if (value === "") {
            return;
        }
        setItems(prev => {
          return [...prev, value]
        });

        inputRef.current.value = "";
    }
    */
    return (
      <>
        <input type="search"/>
        <br />
      </>
    )
};

export default SearchBar;

/* Search:
<input
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    type="search"
/>
<br />
<br />
<form onSubmit={onSubmit}>
New Item: <input ref={inputRef} type="text" />
<button type="submit">Add</button>
</form>
<h3>Items:</h3>
{filteredItems.map(item => (
<div>{item}</div>
))}
*/