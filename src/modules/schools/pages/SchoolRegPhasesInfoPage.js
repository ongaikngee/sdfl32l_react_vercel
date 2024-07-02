import React, { useState, useEffect } from "react"
import {
    Grid, GridColumn, GridRow,
    Dimmer, Loader,
    Card, CardContent, CardHeader, CardMeta, CardDescription
} from 'semantic-ui-react'
import { APP_SETTING, COLORS } from '../../common/constants/common'
import SchoolListConvertor from "../components/SchoolListConvertor"

const SchoolRegPhasesInfoPage = () => {
    const [phases, setPhases] = useState([])
    const [item, setItem] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAPI()
    }, []);

    const getAPI = async () => {
        setLoading(true)
        const base_url = APP_SETTING.base_url_for_backend
        const url = base_url + `p1_reg_phases/`

        const response = await fetch(url, {
            method: 'GET'
        })
        const data = await response.json()

        if (response.status === 200) {
            setPhases(data)
            setLoading(false)
        } else {
            console.log('Something went wrong!')
        }
    }

    const handleClick = (event, { my_id }) => {
        setItem(my_id)
    };

    const removePhase = (name) => {
        const replacement_word = name.split(' ')
        replacement_word.shift()
        return replacement_word.join(' ')
    }

    return (
        <>
            <h1>Registration phases</h1>
            {loading ? (
                <GridRow style={{ height: '200px' }}>
                    <GridColumn>
                        <Dimmer active inverted>
                            <Loader indeterminate size='large'>Getting Phases</Loader>
                        </Dimmer>
                    </GridColumn>
                </GridRow>
            ) : (
                <Grid>
                    <GridRow>
                        <GridColumn>
                            <div class="ui steps">
                                {phases.map((phase, index) => (
                                    <div class="step"
                                        {...(item === phase.id && { class: 'step active' })}
                                        onClick={(event) => handleClick(event, { my_id: phase.id })}>
                                        <div class="content">
                                            <div class="title">{removePhase(phase.phase_name)}</div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            {phases
                                .filter(phase => phase.id === item) // Filter out the active item
                                .map(phase => (
                                    <Card attached fluid color={COLORS.semantic_primary}>
                                        <CardContent>
                                            <CardHeader>{phase.phase_name}</CardHeader>
                                            <CardMeta>Starts: {phase.start_date}</CardMeta>
                                            <CardDescription>
                                                <SchoolListConvertor description={phase.description} />
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                ))}
                        </GridColumn>
                    </GridRow>
                </Grid>

            )
            }
        </>

    )
}

export default SchoolRegPhasesInfoPage