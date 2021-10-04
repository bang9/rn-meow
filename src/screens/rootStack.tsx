import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VotingScreen from "./VotingScreen";
import CatDetailScreen from "./CatDetailScreen";
import Routes, { RouteTitles } from "../common/common.routes";
import BookmarkScreen from "./BookmarkScreen";

const Stack = createNativeStackNavigator();

const RootStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName={Routes.VOTING}>
            <Stack.Screen
                name={Routes.VOTING}
                component={VotingScreen}
                options={{ title: RouteTitles[Routes.VOTING], headerBackTitleVisible: false }}
            />
            <Stack.Screen
                name={Routes.BOOKMARK}
                component={BookmarkScreen}
                options={{ title: RouteTitles[Routes.BOOKMARK], headerBackTitleVisible: false }}
            />
            <Stack.Screen
                name={Routes.CAT_DETAIL}
                component={CatDetailScreen}
                options={{ headerBackTitleVisible: false }}
            />
        </Stack.Navigator>
    );
};

export default RootStack;
