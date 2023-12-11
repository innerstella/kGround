import styled from "styled-components";

const CreatePage = () => {
  return (
    <Wrapper>
      <h1>Mountain Data Create</h1>
      <label>name</label>
      <input type="string" placeholder="ex. 관악산" />
      <br />
      <label>elevation</label>
      <input type="number" placeholder="ex. 624" />
      <br />
      <label>level</label>
      <input type="string" placeholder="ex. 쉬움, 보통, 어려움" />
      <br />
      <label>startAddress</label>
      <input type="string" placeholder="ex. 서울 관악구 승방1길" />
      <br />
      <label>subway</label>
      <input type="string" placeholder="ex. 2호선 사당역" />
      <br />
      <label>walkingDistance</label>
      <input type="number" placeholder="ex. 100" />
      <br />
      <label>walkingTime</label>
      <input type="number" placeholder="ex. 1" />
      <br />
      <label>restaurant1</label>
    </Wrapper>
  );
};

export default CreatePage;

const Wrapper = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  input {
    border: 1px solid #cecece;
  }
`;
