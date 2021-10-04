import { CatImageResponseInterface } from "../libs/interfaces/interface.api";
import { Route } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/src/native-stack/types";

enum Routes {
    VOTING = "voting",
    BOOKMARK = "bookmark",
    CAT_DETAIL = "catDetail"
}

export const RouteTitles: Record<Routes, string> = {
    voting: "Do you like cat?",
    bookmark: "I like cats",
    catDetail: "-"
};

export type RouteParamsUnion =
    | {
          route: Routes.VOTING;
          params: undefined;
      }
    | {
          route: Routes.BOOKMARK;
          params: undefined;
      }
    | {
          route: Routes.CAT_DETAIL;
          params: {
              cat: CatImageResponseInterface;
          };
      };

type ExtractParams<R extends Routes, U extends RouteParamsUnion> = U extends { route: R } ? U["params"] : never;
type RouteParams<R extends Routes> = ExtractParams<R, RouteParamsUnion>;
type ParamListBase<T extends RouteParamsUnion = RouteParamsUnion> = {
    [k in T["route"]]: T["params"];
};

export type RouteProps<T extends Routes, P extends Record<string, unknown> = Record<string, string>> = {
    navigation: NativeStackNavigationProp<ParamListBase, T>;
    route: Route<T, RouteParams<T>>;
} & P;

export default Routes;
