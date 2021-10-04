import React, { useLayoutEffect } from "react";
import { Pressable } from "react-native";
import Routes, { RouteProps } from "./common.routes";
import Icon from "../components/Icon";
import Styles from "./common.styles";

export const useUpdateBookmarkNavigationButton = (navigation: RouteProps<any>["navigation"]) => {
    useLayoutEffect(() => {
        const headerRight = () => {
            return (
                <Pressable onPress={() => navigation.navigate(Routes.BOOKMARK)}>
                    <Icon icon={"star-fill"} size={"medium"} color={Styles.color.yellow} />
                </Pressable>
            );
        };
        navigation.setOptions({ headerRight });
    }, [navigation]);
};
