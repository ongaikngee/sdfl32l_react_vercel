import React, { useState, useEffect } from "react"
import {
    Grid, GridColumn, GridRow,
    Dimmer, Loader,
    Label, Icon
} from 'semantic-ui-react'
import moment from 'moment';
import { APP_SETTING, P1_REG_SETTING, COLORS } from '../../common/constants/common'
import SchoolListConvertor from "../components/SchoolListConvertor"

const SchoolRegPhasesInfoPage = () => {
    const [phases, setPhases] = useState([])
    const [item, setItem] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getAPI()
    }, []);

    const getAPI = async () => {
        setError(null)
        setLoading(true)
        const base_url = APP_SETTING.base_url_for_backend
        const url = base_url + `p1_reg_phases/`

        try {
            const response = await fetch(url, {
                method: 'GET'
            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const data = await response.json();
            setPhases(data)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
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
        if (now < start_date) {
            return start_date.fromNow()
        } else if (now > end_date) {
            return end_date.fromNow()
        } else {
            return `${P1_REG_SETTING.current_phase}, ending ${end_date.fromNow()}`
        }
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
                            <div className="ui fluid unstackable steps">
                                {phases.map((phase, index) => (
                                    <div key={index} className="link step"
                                        {...(item === phase.id && { className: 'step active' })}
                                        onClick={(event) => handleClick(event, { my_id: phase.id })}>
                                        <div className="content">
                                            <div className="title">{removePhase(phase.phase_name)}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {phases
                                .filter(phase => phase.id === item) // Filter out the active item
                                .map((phase, index) => (
                                    <div key={index} className={`ui card fluid ${COLORS.semantic_primary}`}>
                                        <div className="content">
                                            <div className="header">{phase.phase_name}</div>
                                            <div className="meta">
                                                {formatDate(phase.start_date)} to {formatDate(phase.end_date)}
                                            </div>
                                            <div className="description">
                                                <SchoolListConvertor description={phase.description} />
                                            </div>
                                        </div>
                                        <div className="extra content">
                                            <Label color={COLORS.semantic_primary} ribbon='right'>
                                                <Icon name='calendar alternate' />  {formatDateFromNow(phase.start_date, phase.end_date)}
                                            </Label>
                                        </div>
                                    </div>

                                ))}
                        </GridColumn>
                    </GridRow>
                    {error && (
                        <GridRow>
                            <GridColumn>
                                <Label basic color='red'>
                                    {error}
                                </Label>
                            </GridColumn>
                        </GridRow>
                    )}
                </Grid>

            )
            }
        </>

    )
}

export default SchoolRegPhasesInfoPage