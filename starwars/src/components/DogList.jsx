import React from "react";

const DogList = ({ dog }) => {
  console.log(dog);
  return (
    <div>
      <img src={dog} alt="random dog" />
    </div>
  );
};

export default DogList;
