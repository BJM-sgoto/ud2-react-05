import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((idx) => {
  return {
    id: idx,
    name: `test-${idx}`,
    image: "https://source.unsplash.com/gKXKBY-C-Dk",
    email: "12345@aaa.aaa",
    tel: "000-00000-0000",
    company: { name: "aaa会社" },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User List</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
