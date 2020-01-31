import React from 'react'
import { Container, Header, Card, Grid, } from 'semantic-ui-react';

export default function Characters({ data }) {
    return(
        <Container>
            <div>
                <Header as='h1'>Characters</Header>
            </div>
            <br />
            <Grid columns={4}>
                {data.map((characters, i) => {
                    return(
                        <Grid.Column key={i}>
                            <Card link>
                                <Card.Content>
                                    <Card.Header>{characters.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Gender</strong>
                                        <p>{characters.gender}</p>
                                        <strong>Birth Year</strong>
                                        <p>{characters.birth_year}</p>
                                        <strong>Hair Color</strong>
                                        <p>{characters.hair_color}</p>
                                        <strong>Height</strong>
                                        <p>{characters.height}</p>
                                        <strong>Homeworld</strong>
                                        <p>{characters.homeworld_name}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </Container>
    )
}
