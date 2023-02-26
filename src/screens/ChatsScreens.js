import { FlatList, View } from "react-native";
import chats from "../../assets/data/chats.json";
import ChatListItem from "../components/ChatListItem";

const ChatsScreen = () => {
  return (
    // <FlatList
    //   data={chats}
    //   renderItems={({ item }) => <ChatListItem chat={item} />}
    // />
    <View>
      {chats.map((item) => (
        <ChatListItem key={item.id} chat={item} />
      ))}
    </View>
  );
};

export default ChatsScreen;
