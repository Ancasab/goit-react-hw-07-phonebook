import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 0 20px 0;
  border: 1px solid #000;
  padding: 20px;
  text-align: left;
`;

export const Input = styled.input`
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  width: 250px;
`;

export const Button = styled.button`  
  width: 150px;
  font-size: 17px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  margin-top: 5px; 
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

export const Text = styled.p`
  font-size: 30px;
  margin-bottom: 5px; 
  margin-top: 5px; 

`;
