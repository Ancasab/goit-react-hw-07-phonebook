

import styled from 'styled-components'

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

export const ContactData = styled.p`
  font-size: 25px;
  margin-right: 10px;
`;

// export const ContactNumber = styled.span`
//   font-size: 20px;
  
// `;

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