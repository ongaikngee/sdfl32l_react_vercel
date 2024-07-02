import React, { useState, useEffect } from "react"
import {
    Grid, GridColumn, GridRow,
    Dimmer, Loader,
    Card, CardContent, CardHeader, CardMeta, CardDescription,
    Label, Icon
} from 'semantic-ui-react'
import moment from 'moment';
import { APP_SETTING, P1_REG_SETTING, COLORS } from '../../common/constants/common'
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

    // Methods for removal of 1st word of sentence.
    // E.g Phase 1 => 1
    const removePhase = (name) => {
        if (name === P1_REG_SETTING.phase_2c_s) {
            name = P1_REG_SETTING.phase_2c_s_shortform
        }
        const replacement_word = name.split(' ')
        replacement_word.shift()
        return replacement_word.join(' ')
    }

    // Methods to convert date to DateString
    const formatDate = (date) => {
        const dayWrapper = moment(date)
        return dayWrapper.format(APP_SETTING.preferred_date_format)
    }


    // Methods to convert date Moment fromNow function
    const formatDateFromNow = (start, end) => {
        const now = moment()
        const start_date = moment(start)
        const end_date = moment(end)
        if (now < start_date){
            return start_date.fromNow()
        }else if (now > end_date) {
            return end_date.fromNow()
        }
        return P1_REG_SETTING.current_phase
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
                            <div class="ui fluid unstackable steps">
                                {phases.map((phase, index) => (
                                    <div class="link step"
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
                                    <Card ui fluid color={COLORS.semantic_primary}>
                                        <CardContent>
                                            <CardHeader>{phase.phase_name}</CardHeader>
                                            <CardMeta>{formatDate(phase.start_date)} to {formatDate(phase.end_date)}</CardMeta>
                                            <CardDescription>
                                                <SchoolListConvertor description={phase.description} />
                                            </CardDescription>
                                        </CardContent>
                                        <CardContent>
                                            <Label color={COLORS.semantic_primary} ribbon='right'>
                                                <Icon name='calendar alternate' />  {formatDateFromNow(phase.start_date, phase.end_date)}
                                            </Label>
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