import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { CalendarEvent } from "./types";

export interface EventProps {
    event: CalendarEvent;
}

// list the screens and the parameters they have
// think meant to split into Main Param list, Auth Param list, Calendar param list?
export type MainParamList = {
    HomeScreen: undefined;
    EventDetailsScreen: EventProps;
    Calendar: undefined;
}

export type MainStackNavProps<T extends keyof MainParamList> = {
    navigation: StackNavigationProp<MainParamList, T>;
    route: RouteProp<MainParamList, T>
}