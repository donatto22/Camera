import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

import Actions from './components/Actions'

import WebCam from 'react-webcam'
import feather from 'feather-icons'

const App = () => {
    useState()

    useEffect(() => {
        feather.replace()
    }, [])

    const videoConstraints = {
        width: 1200,
        height: 700
    }

    return (
        <Box w='100dvw' h='100dvh'>
            <Box display='flex' flexDir='row' justifyContent='space-between' height='100%'>
                <Actions>
                    <i data-feather="camera"></i>
                </Actions>

                <Box alignContent='center' textAlign='center'>
                    <WebCam style={{ borderRadius: '10px', boxShadow: '0 40px 100px -80px var(--white)' }} videoConstraints={videoConstraints}/>
                </Box>

                <Actions>
                    <i data-feather="maximize"></i>
                </Actions>
            </Box>
        </Box>
    )
}

export default App
