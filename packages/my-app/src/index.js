import React from 'react'
import CustomRenderer from './renderer'

const Text = props => {
  return <p className={props.className}>{props.content}</p>
}

const Container = props => {
  return <div>{props.children}</div>
}

const App = () => {
  return (
    <Container>
      <Text className="hello-class" content="Hello" />
    </Container>
  )
}

CustomRenderer.render(<App />, document.getElementById('root'))