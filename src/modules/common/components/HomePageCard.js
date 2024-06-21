import React from "react"
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
} from 'semantic-ui-react'

export default function HomePageCard () {
    // TODO: This compoments is currently not in use. will use it in dashboard soon
    return (
        <Card>
            <Image src='https://mighty.tools/mockmind-api/content/cartoon/26.jpg' wrapped ui={false} />
            <CardContent>
                <CardHeader>Matthew</CardHeader>
                <CardMeta>
                    <span className='date'>Joined in 2015</span>
                </CardMeta>
                <CardDescription>
                    Matthew is a musician living in Nashville.
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
            </CardContent>
        </Card>
    )
}