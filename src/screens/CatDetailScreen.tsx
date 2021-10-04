import { View, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Routes, { RouteProps } from "../common/common.routes";
import Styles from "../common/common.styles";
import Icon from "../components/Icon";

type Props = RouteProps<Routes.CAT_DETAIL>;
const CatDetailScreen: React.FC<Props> = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <Image resizeMode={"contain"} source={{ uri: route.params.cat.url }} style={StyleSheet.absoluteFill} />
            <Pressable onPress={() => navigation.goBack()} style={styles.dismiss}>
                <Icon icon={"x"} size={"medium"} color={Styles.color.white} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Styles.color.black
    },
    dismiss: {
        position: "absolute",
        right: Styles.scale(20),
        top: Styles.scale(20)
    }
});

export default CatDetailScreen;
