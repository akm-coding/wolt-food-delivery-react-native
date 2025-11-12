import { Text, View } from "react-native";

/**
 * Screen component that renders centered instructional text prompting the user to edit the screen.
 *
 * @returns A JSX element containing a full-height View that centers a Text node with the message "Edit app/index.tsx to edit this screen."
 */
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}