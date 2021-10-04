import { View, Text } from "react-native";
import React from "react";
import Routes, { RouteProps } from "../common/common.routes";

type Props = RouteProps<Routes.BOOKMARK>;
const BookmarkScreen: React.FC<Props> = () => {
    return (
        <View>
            <Text>Bookmark</Text>
        </View>
    );
};

export default BookmarkScreen;
