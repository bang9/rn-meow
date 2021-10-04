import { View, FlatList, Alert, useWindowDimensions } from "react-native";
import React, { useCallback, useMemo } from "react";
import Routes, { RouteProps } from "../common/common.routes";
import { useBookmark } from "../contexts/context.service.bookmark";
import CatImageView from "../components/CatImageView";
import { CatImageResponseInterface } from "../libs/interfaces/interface.api";

const COLUMN = 3;

type Props = RouteProps<Routes.BOOKMARK>;
const BookmarkScreen: React.FC<Props> = () => {
    const { bookmarks, isBookmarked, removeFromBookmark } = useBookmark();
    const { width } = useWindowDimensions();

    const gridStyle = useMemo(() => {
        return { width: "33.333%", height: width / COLUMN };
    }, [width]);

    const onRemoveBookmark = useCallback(
        (cat: CatImageResponseInterface) => {
            Alert.alert("🙀", "Are you sure remove a cat from bookmarks?", [
                { text: "Cancel", style: "cancel" },
                { text: "Remove", style: "destructive", onPress: () => removeFromBookmark(cat.id) }
            ]);
        },
        [removeFromBookmark]
    );

    return (
        <FlatList
            data={bookmarks}
            numColumns={COLUMN}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <View style={gridStyle}>
                        <CatImageView
                            cat={item}
                            bookmarked={isBookmarked(item.id)}
                            onRemoveBookmark={onRemoveBookmark}
                        />
                    </View>
                );
            }}
        />
    );
};

export default BookmarkScreen;
