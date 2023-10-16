import React from 'react'

const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className='filter'>
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">todas</option>
                        <option value="Completed">completas</option>
                        <option value="Incomplete">incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabetica:</p>
                    <button onClick={() => setSort("Asc")} >Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    )
}

export default Filter