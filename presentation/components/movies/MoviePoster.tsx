import { router } from "expo-router";
import { Image, Pressable } from "react-native";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean; // Opcional, por defecto será false
  className?: string; // Para inyectar clases extra si se necesita
}

const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
  return (
    // active:opacity-90 da un sutil efecto visual al tocar el póster
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        // Usamos source={{ uri: ... }} porque la imagen viene de i nternet
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          // Dimensiones dinámicas basadas en la property smallPoster
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
