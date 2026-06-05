import { Cast } from "@/infrastructure/interface/cast.interface";
import { FlatList, View } from "react-native";
import { ActorCard } from "./ActorCard";

interface Props {
  actors: Cast[];
}

export const MovieCast = ({ actors }: Props) => {
  return (
    <View>
      <FlatList
        horizontal
        data={actors}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};
