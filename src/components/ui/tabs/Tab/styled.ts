import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #e6dbdb;
  padding: 0 16px;
  gap: 32px;
  background: #e72925;
`;

export const Tab = styled.a<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0 13px;
  border-bottom: 3px solid
    ${(props) => (props.active ? "#181111" : "transparent")};
  color: ${(props) => (props.active ? "#181111" : "#896161")};
  font-weight: bold;
  font-size: 0.875rem;
`;
