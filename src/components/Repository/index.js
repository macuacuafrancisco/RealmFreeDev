import React from 'react'
import {Text} from 'react-native'
//import { Icon } from 'react-native-vector-icons/Icon'

import { Container, Name, Description, Stats,Stat,StatCount, Refresh, RefreshText } from './styles'

export default function Repository({data, onRefresh}) {
  return (
    <Container>
        <Name>{data.name}</Name>
        <Description>{data.description}</Description>
        <Stats>
              <Stat>
                  {/* <Icon name="stars" size={16} color="#333"/> */}
                  <Text>Stars:</Text>
                  <StatCount>{data.stars}</StatCount>
            </Stat>
            <Stat>
                  {/* <Icon name="code-fork" size={16} color="#333"/> */}
                  <Text>Forks:</Text>
                  <StatCount>{data.forks}</StatCount>
            </Stat>
          </Stats>

    <Refresh onPress={onRefresh}>
          {/* <Icon name="refresh" color="#7159c1" size={16}/> */}
          <RefreshText>Actualizar</RefreshText>
    </Refresh>

    </Container>
  )
}
