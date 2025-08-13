import { KeyboardAvoidingView, Platform, Text } from "react-native";



export default function AuthScreen(){
    return(
        <KeyboardAvoidingView behavior={Platform.OS === "android" ? "height" : "padding"}>
            <Text>Create Account</Text>
        </KeyboardAvoidingView>
    )
}