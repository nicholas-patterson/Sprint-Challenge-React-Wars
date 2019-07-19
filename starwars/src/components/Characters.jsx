import React from "react";

const Characters = ({ people }) => {
  console.log(people);
  return (
    <div>
      <h2>Name: {people.name}</h2>
      <h4>Gender: {people.gender}</h4>
    </div>
  );
};

export default Characters;
