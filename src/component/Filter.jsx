import React from "react";

const Filter = ({ setFilter }) => {
    return (
        <div className="wrappers">
            <input type="text" className="  input-style" placeholder="Title" onChange={(e) => setFilter(e.target.value)} />
            <input type="number"  className="input" placeholder="Rating" onChange={(e) => setFilter(e.target.value)} />
        </div>
    );
};


export default Filter;