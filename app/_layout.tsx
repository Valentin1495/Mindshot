import { GamificationProvider } from '@/context/gamification-context';
import { QuizSetupProvider } from '@/context/quiz-setup-context';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const convex = new ConvexReactClient(
    process.env.EXPO_PUBLIC_CONVEX_URL as string
  );

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <QuizSetupProvider>
          <GamificationProvider>
            <SafeAreaProvider>
              <Stack screenOptions={{ headerShown: false }} />
            </SafeAreaProvider>
          </GamificationProvider>
        </QuizSetupProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
