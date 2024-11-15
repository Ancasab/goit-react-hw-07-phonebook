

import styled, {keyframes} from 'styled-components'

export const ListContact = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  // gap: 20px;
`;

export const ContactItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-bottom: 10px;
`;
export const Text = styled.p`
  display: inline-block;
  min-width: 300px;
`;

export const ContactData = styled.p`
  font-size: 25px;
  margin-right: 10px;
`;


export const Button = styled.button`
  padding: 5px 20px;
  margin-left: 20px;  
  font-size: 17px;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
  
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-bottom: 20px;
  margin-left: 70px;

  animation: ${spin} 1s ease-in-out infinite;
`;