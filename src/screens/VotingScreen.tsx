import { View, Text, Button, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import Icon from "../components/Icon";
import Styles from "../common/common.styles";
import Routes, { RouteProps } from "../common/common.routes";

type Props = RouteProps<Routes.VOTING>;
const VotingScreen: React.FC<Props> = ({ navigation }) => {
    useLayoutEffect(() => {
        const headerRight = () => {
            return (
                <Pressable onPress={() => navigation.navigate(Routes.BOOKMARK)}>
                    <Icon icon={"star-fill"} size={"medium"} color={Styles.color.yellow} />
                </Pressable>
            );
        };
        navigation.setOptions({ headerRight });
    }, []);

    return (
        <View>
            <Text>VOTING</Text>
        </View>
    );
};

export default VotingScreen;
