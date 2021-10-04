import React from "react";
import { ImageStyle, StyleProp, StyleSheet, View, ViewStyle, Image } from "react-native";
import AssetIcons from "../assets/icons";
import Styles from "../common/common.styles";

export type IconType = keyof typeof AssetIcons;
export type IconSizeType = Exclude<keyof typeof styles, "container">;

interface IProps {
    style?: StyleProp<ImageStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    icon: IconType;
    size?: IconSizeType;
    color?: string;
}

const Icon: React.FC<IProps> = ({ icon, size = "medium", containerStyle, color, style }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Image source={AssetIcons[icon]} style={[styles[size], color ? { tintColor: color } : {}, style]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    tiny_10: {
        width: Styles.scale(10),
        height: Styles.scale(10)
    },
    tiny: {
        width: Styles.scale(12),
        height: Styles.scale(12)
    },
    tiny_14: {
        width: Styles.scale(14),
        height: Styles.scale(14)
    },
    small_16: {
        width: Styles.scale(16),
        height: Styles.scale(16)
    },
    small: {
        width: Styles.scale(18),
        height: Styles.scale(18)
    },
    small_20: {
        width: Styles.scale(20),
        height: Styles.scale(20)
    },
    medium_22: {
        width: Styles.scale(22),
        height: Styles.scale(22)
    },
    medium: {
        width: Styles.scale(24),
        height: Styles.scale(24)
    },
    medium_26: {
        width: Styles.scale(26),
        height: Styles.scale(26)
    },
    large_28: {
        width: Styles.scale(28),
        height: Styles.scale(28)
    },
    large: {
        width: Styles.scale(30),
        height: Styles.scale(30)
    },
    large_32: {
        width: Styles.scale(32),
        height: Styles.scale(32)
    }
});

export default React.memo(Icon);
