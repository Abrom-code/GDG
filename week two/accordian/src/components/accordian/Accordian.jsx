import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState([]);

  const handleSingleSelection = (id) => {
    if (selected.find((prevId) => prevId === id)) {
      setSelected((prevSelected) =>
        prevSelected.filter((prevId) => prevId !== id)
      );
    } else {
      setSelected((prevSelected) => [...prevSelected, id]);
    }
  };

  console.log(selected);
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="item"
              key={dataItem.id}
              onClick={() => handleSingleSelection(dataItem.id)}
            >
              <div className="title">
                <h3>{dataItem.title}</h3>
              </div>
              {selected.find((selected) => selected === dataItem.id) && (
                <div>
                  <p>{dataItem.content}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
