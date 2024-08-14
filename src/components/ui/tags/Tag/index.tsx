import { Icon, StyledTag } from "./styled";

const Tag = ({ title, icon }: { title: string; icon: JSX.Element }) => {
  return (
    <StyledTag>
      <Icon>
        <span>{icon}</span>
      </Icon>
      <span>{title}</span>
    </StyledTag>
  );
};

export default Tag;
