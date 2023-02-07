import React from "react";
import Navigator from "./src/navigation/Navigator";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoginScreen from "./src/screens/LoginScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { TermsScreen } from "./src/screens/TermsScreen";

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <Navigator />
    </QueryClientProvider>
  );
};

export default App;