import React from 'react'
//import { Icon } from 'react-native-vector-icons/Icon'

import { Container, Name, Description, Stats,Stat,StatCount } from './styles'

export default function Repository({data}) {
  return (
    <Container>
        <Name>{data.name}</Name>
        <Description>{data.description}</Description>
        <Stats>
              <Stat>
                  {/* <Icon name="stars" size={16} color="#333"/> */}
                  <StatCount>{data.stars}</StatCount>
            </Stat>
            <Stat>
                  {/* <Icon name="code-fork" size={16} color="#333"/> */}
                  <StatCount>{data.forks}</StatCount>
            </Stat>
          </Stats>
    </Container>
  )
}
