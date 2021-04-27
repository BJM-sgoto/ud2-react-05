import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&Copy: 2021 xx Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #119999;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
