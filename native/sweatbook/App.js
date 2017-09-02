import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import styled from 'styled-components/native'

export default class App extends React.Component {
  render() {
    return (
      <Homebox>
        <Header>SweatBook</Header>
        <View>
          <Text>Your Last Workout</Text>
          <Text>Sat June 12th</Text>
        </View>
        <Button
          title="Start Workout"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </Homebox>
    )
  }
}

const Homebox = styled.View`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: papayawhip;
`

const Header = styled.Text`font-size: 30px;`
