import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Routes, { RouteProps } from "../common/common.routes";

type Props = RouteProps<Routes.CAT_DETAIL>;
const CatDetailScreen: React.FC<Props> = ({ route }) => {
    return (
        <View>
            <Image source={{ uri: route.params.cat.url }} style={StyleSheet.absoluteFill} />
            <Text>Cat detail</Text>
        </View>
    );
};

export default CatDetailScreen;
