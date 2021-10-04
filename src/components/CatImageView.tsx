import React from "react";
import { CatImageResponseInterface } from "../libs/interfaces/interface.api";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Icon from "./Icon";
import Styles from "../common/common.styles";

type Props = {
    cat: CatImageResponseInterface;
    bookmarked: boolean;
    onRemoveBookmark?: (id: CatImageResponseInterface) => void;
};
const CatImageView: React.FC<Props> = ({ cat, bookmarked, onRemoveBookmark }) => {
    const backgroundColor = cat.url.endsWith(".png") ? Styles.color.gray3 : Styles.color.transparent;
    return (
        <View style={[StyleSheet.absoluteFill, { backgroundColor }]}>
            <Image
                resizeMethod={"resize"}
                resizeMode={"cover"}
                source={{ uri: cat.url }}
                style={StyleSheet.absoluteFill}
            />
            {bookmarked && (
                <Pressable style={styles.icon} onPress={() => onRemoveBookmark?.(cat)}>
                    <Icon icon={"star-fill"} color={Styles.color.yellow} />
                </Pressable>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        right: 10,
        top: 10
    }
});

export default React.memo(CatImageView);
