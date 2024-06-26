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

const School01Page = () => {
    return (
        <>
            <h1>Pictures</h1>
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

            <Card>
                <Image src='https://mighty.tools/mockmind-api/content/cartoon/4.jpg' wrapped ui={false} />
                <CardContent>
                    <CardHeader>Jane</CardHeader>
                    <CardMeta>
                        <span className='date'>Joined in 2015</span>
                    </CardMeta>
                    <CardDescription>
                        Jane is a Artist living in San Fransisco.
                    </CardDescription>
                </CardContent>
                <CardContent extra>
                    <a>
                        <Icon name='user' />
                        29 Friends
                    </a>
                </CardContent>
            </Card>
        </>
    )
}

export default School01Page