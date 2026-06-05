import { Movie } from "@/infrastructure/interface/movie.interface";
import { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;

  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  movies,
  title,
  className,
  loadNextPage,
}: Props) => {
  //1. Candado para evitar multiples disparos al evento
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  //2. Funcion que evalua la posicion del scroll
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    //Si ya estamos cargando abortamos la ejecucion
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    //3. Formula matemativa con 600px de m,argen de gracia
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    //Si no hemos llegado al final no hacemos nada
    if (!isEndReached) return;

    console.log("Cargando siguiente pelicula...");
    //4. Cerramos el candado indicando que empezanmos a caragr
    loadNextPage && loadNextPage();
  };

  return (
    <View className="mt-5">
      {/* Solo mostramos el título si el componente padre lo envía */}
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false} // ¡Vital para el diseño limpio!
        //Parche de seguridad evitando que se crashee por id duplicado
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
