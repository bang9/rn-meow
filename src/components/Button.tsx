import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Styles from "../common/common.styles";

type Props = {
    title: string;
    onPress: () => void;
    color?: string;
    titleColor?: string;
};
const Button: React.FC<Props> = ({ title, onPress, color = Styles.color.primary, titleColor = Styles.color.white }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => onPress()}
            style={[styles.button, { backgroundColor: color }]}
        >
            <Text numberOfLines={2} style={[styles.title, { color: titleColor }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        height: Styles.scale(48),
        flex: 1,
        borderRadius: Styles.scale(8)
    },
    title: {
        fontSize: Styles.font.medium,
        textAlign: "center"
    }
});

export default Button;
