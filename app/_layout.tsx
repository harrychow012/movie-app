import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import "../global.css";

// 1. Instanciamos el cliente que guardará el caché
const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    // 2. Envolvemos nuestra navegación en el Provider
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  );
};

export default RootLayout;
