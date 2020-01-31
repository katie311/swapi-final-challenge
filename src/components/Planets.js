import React from 'react'
import {Container, Header, Grid, Card} from 'semantic-ui-react';

export default function Planets({ data }) {
    return(
        <Container>
            <div>
                <Header as='h1'>Planets</Header>
            </div>
            <br />
            <Grid columns={4}>
                {data.map((planets, i) => {
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{planets.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Height</strong>
                                        <p>{planets.height}</p>
                                        <strong>Mass</strong>
                                        <p>{planets.mass}</p>
                                        <strong>Hair Color</strong>
                                        <p>{planets.hair_color}</p>
                                        <strong>Height</strong>
                                        <p>{planets.height}</p>
                                        <strong>Homeworld</strong>
                                        <p>{planets.homeworld_name}</p>
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
