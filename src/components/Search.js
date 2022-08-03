import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { loadOptions } from "./endpoints"
import CurrentWeather from "./SearchWeatherCard"

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)

    const handleSearch = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <div className="w-screen search pl-16">
            
        <AsyncPaginate 
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleSearch}
            loadOptions={loadOptions}
        />
        </div>
    )
}

export default Search