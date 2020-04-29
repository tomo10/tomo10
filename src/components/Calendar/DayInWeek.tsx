
import React, { Component } from 'react'

import {
    View,
    Text,
} from 'react-native';

export default (props) => {

        return(
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        color: "gray",
                    }}
                >
                    {props.day}
                </Text>
            </View>
        )
}