
import * as React from "react";
import {
  StyleSheet, View, Text, ScrollView
} from "react-native";
import { CalendarEvent } from "src/types";


interface ContentProps {
    event: CalendarEvent;
}

export default ({event}: ContentProps) => {

    return (
        <ScrollView>
            <View style={styles.header}>
                {/* <Header {...{event, y}} />
                <Reply /> */}
                {/* <Text style={styles.text}>{project.name}</Text> */}
                <Text style={styles.text}>{event.title}</Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    text: {
        color: 'pink'
    },
    header: {
        marginTop: 24
    }
  });