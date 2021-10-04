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
    return (
        <View style={StyleSheet.absoluteFill}>
            <Image resizeMode={"cover"} source={{ uri: cat.url }} style={StyleSheet.absoluteFill} />
            {bookmarked && (
                <Pressable onPress={() => onRemoveBookmark?.(cat)}>
                    <Icon
                        icon={"star-fill"}
                        color={Styles.color.yellow}
                        containerStyle={{ position: "absolute", right: 10, top: 10 }}
                    />
                </Pressable>
            )}
        </View>
    );
};

export default React.memo(CatImageView);