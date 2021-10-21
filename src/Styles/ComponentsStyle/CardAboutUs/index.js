import styled from "styled-components";

export const LiContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 450px;
  width: 300px;
  margin: 0 auto 50px;
  padding: 10px 10px 20px;

  background-color: var(--green-pallet-one);
  border-radius: 30px;

  text-align: center;
  font-size: 22px;

  img {
    width: 200px;
    height: 300px;
    margin: 10px;

    border-radius: 30px;

    object-fit: cover;
  }

  a {
    margin: 0 10px 10px;

    color: black;
  }

  h3 {
    font-family: var(--font-type-details);
    font-weight: var(--font-w-thin);
    font-size: 30px;
    color: #f1ede0;
  }
`;
