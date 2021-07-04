import React from "react"
import "./BlogLayout.scss"
import { Container, Grid } from "semantic-ui-react"

export default function BlogLayout(props) {
  const { children } = props
  return (
    <Container className="blog-layout">
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={4}>
          <h1>Menu</h1>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={4}>
          {children}
        </Grid.Column>
      </Grid>
    </Container>
  )
}
