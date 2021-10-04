import { FlatList, Alert, useWindowDimensions, Pressable, LayoutAnimation, Text, Image, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import Routes, { RouteProps } from "../common/common.routes";
import { useBookmark } from "../contexts/context.service.bookmark";
import CatImageView from "../components/CatImageView";
import { CatImageResponseInterface } from "../libs/interfaces/interface.api";
import Styles from "../common/common.styles";

const COLUMN = 3;

type Props = RouteProps<Routes.BOOKMARK>;
const BookmarkScreen: React.FC<Props> = ({ navigation }) => {
    const { bookmarks, isBookmarked, removeFromBookmark } = useBookmark();
    const { width } = useWindowDimensions();

    const gridStyle = useMemo(() => {
        return { width: "33.333%", height: width / COLUMN };
    }, [width]);

    const onRemoveBookmark = useCallback(
        (cat: CatImageResponseInterface) => {
            Alert.alert("🙀", "Are you sure remove this cat from bookmarks?", [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Remove",
                    style: "destructive",
                    onPress: () => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        removeFromBookmark(cat.id);
                    }
                }
            ]);
        },
        [removeFromBookmark]
    );

    const navigateToDetail = (cat: CatImageResponseInterface) => {
        navigation.navigate(Routes.CAT_DETAIL, { cat });
    };

    return (
        <FlatList
            data={bookmarks}
            numColumns={COLUMN}
            keyExtractor={item => item.id}
            ListEmptyComponent={<EmptyView />}
            renderItem={({ item }) => (
                <Pressable onPress={() => navigateToDetail(item)} style={gridStyle}>
                    <CatImageView cat={item} bookmarked={isBookmarked(item.id)} onRemoveBookmark={onRemoveBookmark} />
                </Pressable>
            )}
        />
    );
};

const EmptyView = () => {
    return (
        <View style={{ marginTop: 24, alignItems: "center", justifyContent: "center" }}>
            <Image
                resizeMode={"contain"}
                source={require("../assets/images/cat.png")}
                borderRadius={12}
                style={{ borderRadius: 12, overflow: "hidden", width: 200, height: 200 }}
            />
            <Text style={{ fontSize: Styles.font.medium }}>{"There's no cat"}</Text>
        </View>
    );
};

export default BookmarkScreen;
