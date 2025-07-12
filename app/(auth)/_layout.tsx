import { images } from "@/constants";
import { Slot } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

const Authlayout = () => {
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">
      <View
        className="w-full relative"
        style={{ height: Dimensions.get("screen").height / 2.25 }}
      >
        <ImageBackground
          source={images.loginGraphic}
          className="size-full rounded-b-lg"
          resizeMode="stretch"
        />
        <Image
          source={images.logo}
          className="self-center size-48 absolute -bottom-16 z-10"
        />
      </View>
      <Slot />
    </ScrollView>
  </KeyboardAvoidingView>;
};

export default Authlayout;

//slot just skip the layout file to render it on our app instead it render other files like in this case we have sign-in and sign-up page
