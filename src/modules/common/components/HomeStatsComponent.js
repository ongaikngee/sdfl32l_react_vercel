import React from "react"
import { Segment } from "semantic-ui-react"

export default function HomeStatsComponent ({ item }) {
    return (
        <Segment color={item.color} padded textAlign='center' basic>
            <h1 color={item.color}>{item.value}</h1>
            <p>{item.title}</p>
        </Segment>
    )
}