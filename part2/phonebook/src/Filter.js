function Filter({ newFilter, handleInputFilterChange }) {
    return (
        <div>
          filter shown with: <input value={newFilter} onChange={handleInputFilterChange}/>
        </div>
    )
}

export default Filter;