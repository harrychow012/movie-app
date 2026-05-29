import { Movie } from "@/infrastructure/interface/movie.interface";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ movies, title }: Props) => {
  return (
    <View className="mt-5">
      {/* Solo mostramos el título si el componente padre lo envía */}
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false} // ¡Vital para el diseño limpio!
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
