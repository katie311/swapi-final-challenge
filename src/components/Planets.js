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
                            <Card link>
                                <Card.Content>
                                    <Card.Header>{planets.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Diameter</strong>
                                        <p>{planets.diameter}</p>
                                        <strong>Rotation Period</strong>
                                        <p>{planets.rotation_period}</p>
                                        <strong>Orbital Period</strong>
                                        <p>{planets.orbital_period}</p>
                                        <strong>Population</strong>
                                        <p>{planets.population}</p>
                                        <strong>Climate</strong>
                                        <p>{planets.climate}</p>
                                        <strong>Terrain</strong>
                                        <p>{planets.terrain}</p>
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
