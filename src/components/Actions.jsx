import { Stack } from '@mui/material'
import PropTypes from 'prop-types'

const Actions = ({ children }) => {
    return (
        <Stack backgroundColor='rgba(0, 0, 0, 0.4)' position='relative' direction='column'
            justifyContent='center' color='var(--white)' width='70px' alignItems='center'>
                { children }
        </Stack>
    )
}

Actions.propTypes = {
    children: PropTypes.node
}

export default Actions
