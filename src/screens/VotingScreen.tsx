import { View, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Styles from "../common/common.styles";
import Routes, { RouteProps } from "../common/common.routes";
import Button from "../components/Button";
import { useUpdateBookmarkNavigationButton } from "../common/common.hooks";
import { CatImageResponseInterface } from "../libs/interfaces/interface.api";
import API from "../libs/api";
import { useBookmark } from "../contexts/context.service.bookmark";
import CatImageView from "../components/CatImageView";

type Props = RouteProps<Routes.VOTING>;
const VotingScreen: React.FC<Props> = ({ navigation }) => {
    useUpdateBookmarkNavigationButton(navigation);

    const { addToBookmark, removeFromBookmark } = useBookmark();
    const [cats, setCats] = useState<CatImageResponseInterface[]>([]);

    const pickCat = (callback: (cat: CatImageResponseInterface) => void) => {
        setCats(prev => {
            const copy = prev.concat();
            const cat = copy.pop();
            cat && callback(cat);
            return copy;
        });
    };

    const onPressLike = () => {
        pickCat(cat => addToBookmark({ ...cat, storedAt: Date.now() }));
    };
    const onPressNotLike = () => {
        pickCat(cat => removeFromBookmark(cat.id));
    };

    useEffect(() => {
        if (cats.length !== 0) return;
        API.cat.images.search(3).then(setCats);
    }, [cats.length]);

    return (
        <View style={styles.container}>
            <View style={styles.viewContainer}>
                <CatViewer cats={cats} />
            </View>

            <View style={styles.buttonContainer}>
                <Button title={"Like"} color={Styles.color.success} onPress={onPressLike} />
                <View style={{ width: 8 }} />
                <Button title={"Not like"} color={Styles.color.error} onPress={onPressNotLike} />
            </View>
        </View>
    );
};

const CatViewer: React.FC<{ cats: CatImageResponseInterface[] }> = ({ cats }) => {
    const { isBookmarked } = useBookmark();
    if (!cats.length) return <ActivityIndicator style={StyleSheet.absoluteFill} />;
    return (
        <>
            {cats.map(cat => {
                return <CatImageView key={cat.id} cat={cat} bookmarked={isBookmarked(cat.id)} />;
            })}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    viewContainer: {
        overflow: "hidden",
        backgroundColor: Styles.color.gray0,
        width: Styles.scale(280),
        height: Styles.scale(280),
        marginBottom: Styles.scale(12),
        borderRadius: Styles.scale(12)
    },
    buttonContainer: {
        flexDirection: "row",
        paddingHorizontal: Styles.layout.margin
    }
});

export default VotingScreen;
