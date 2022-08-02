import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { loadOptions} from "./endpoints"

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)

    const handleSearch = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <div className="search">
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