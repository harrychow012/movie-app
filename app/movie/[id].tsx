import { MovieCast } from "@/presentation/components/movies/MovieCast";
import MovieDescription from "@/presentation/components/movies/MovieDescription";
import MovieHeader from "@/presentation/components/movies/MovieHeader";
import { useMovie, useMovieCast } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie(+id);
  const { movieCastQuery } = useMovieCast(+id);

  // 1. Mejora de seguridad: || !movieQuery.data asegura que la data exista abajo
  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      {/* 2. Utilizamos nuestro nuevo componente visual */}
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />
      <MovieDescription movie={movieQuery.data} />
      <MovieCast actors={movieCastQuery.data || []} />
    </ScrollView>
  );
};

export default MovieScreen;
