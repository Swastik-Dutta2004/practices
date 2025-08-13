import { router, Stack , useRouter} from "expo-router";
import React, { useEffect } from "react";

function routeGuard({childer}: {childer: React.ReactNode}){
  const router = useRouter()
  const isAuth = false;

  useEffect(() => {
    if(!isAuth){
      router.replace("/auth")
    }
  })

}

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
  </Stack>)
}
