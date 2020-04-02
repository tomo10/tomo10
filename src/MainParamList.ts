import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type MainParamList = {
    HomeScreen: undefined;
    EventDetailsScreen: undefined;
    Calendar: undefined;
}

export type MainStackNavProps<T extends keyof MainParamList> = {
    navigation: StackNavigationProp<MainParamList, T>;
    route: RouteProp<MainParamList, T>
}