import { Box } from '@chakra-ui/react'

import PropTypes from 'prop-types'

const Actions = ({ children }) => {
    return (
        <Box bgColor='rgba(0, 0, 0, .4)' zIndex='100' position='relative' alignContent='center' color='var(--white)' w='70px' textAlign='center'>
            { children }
        </Box>
    )
}

Actions.propTypes = {
    children: PropTypes.node
}

export default Actions
