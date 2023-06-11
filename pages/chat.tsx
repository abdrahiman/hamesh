import Container from "../components/Container";
const fetcher = async (url: string | Request) => {
  const res = await fetch(url);
  return res.json();
};
import useSwr from "swr";
const Chat = () => {
  let { data: chats, isLoading, error } = useSwr("/api/chats", fetcher);

  return <Container>Chats</Container>;
};

export default Chat;
