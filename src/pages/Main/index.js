import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Repository from '../../components/Repository'

import { Container, Title, Form, Input, Submit, List } from './styles'

export default function Main() {
  return (
    <Container>
        <Title>Repositorios</Title>

        <Form>
              <Input 
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Procurar repositorio ..."
              />

          <Submit onPress={()=>{}}> 
                <Icon name="add" size={22} color="#FFF" />
          </Submit>

          </Form>


            <List
                keyboardShouldPersisteTaps="handled"
                data={[
                  {
                      id: 1,
                      name: "unform",
                      description: "Este Projkect para uifpr ui ",
                      stars: 53453,
                      forks: 5456
                  }
                 ]}
                keyExtractor={item=> String(item.id)}
                renderItem={({item })=>(
                    <Repository data={item} />
                )}
            />


    </Container>
  )
}
