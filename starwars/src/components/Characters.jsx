import React from "react";
import styled from "styled-components";

const Name = styled.h2`
  text-decoration: underline;
  font-size: 20px;
`;

const Characters = ({ people }) => {
  return (
    <div>
      <Name>
        {" "}
        <div>Name: {people.name}</div>
      </Name>
      <h3>Gender: {people.gender}</h3>
      <h5>Height: {people.height}</h5>
    </div>
  );
};

export default Characters;
