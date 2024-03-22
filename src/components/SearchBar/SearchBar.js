import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [filterBy, setFilterBy] = useState('');

    useEffect(() => {
        // Fetch data from API
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('your_api_endpoint');
            setData(response.data);
            setFilteredData(response.data); // Initially set filtered data same as fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        filterData(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        sortData(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterBy(event.target.value);
        filterData(searchQuery, event.target.value);
    };

    const filterData = (searchQuery, filterBy) => {
        let filtered = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

        if (filterBy) {
            filtered = filtered.filter(item => item.category === filterBy);
        }

        setFilteredData(filtered);
    };

    const sortData = (sortBy) => {
        let sorted = [...filteredData];

        if (sortBy === 'price_low') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price_high') {
            sorted.sort((a, b) => b.price - a.price);
        }

        setFilteredData(sorted);
    };

    return (
        <div>
            <input type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search..." />
            <select value={sortBy} onChange={handleSortChange}>
                <option value="">Sort By</option>
                <option value="price_low">Price Low to High</option>
                <option value="price_high">Price High to Low</option>
            </select>
            <select value={filterBy} onChange={handleFilterChange}>
                <option value="">Filter By</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                {/* Add more options for categories */}
            </select>
            <button>Search</button>

            {/* Display filtered data */}
            <ul>
                {filteredData.map(item => (
                    <li key={item.id}>{item.name} - {item.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
