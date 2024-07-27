import { useEffect, useRef, useCallback, useState } from 'react'

import Actions from './components/Actions'

import WebCam from 'react-webcam'
import feather from 'feather-icons'
import { Box, IconButton, Stack } from '@mui/material'

const App = () => {
    const [photo, setPhoto] = useState(null)

    const webcam = useRef(null)

    const capture = useCallback(() => {
        const img = webcam.current.getScreenshot()
        setPhoto(img)
    }, [])

    useEffect(() => {
        feather.replace()
    }, [])

    const videoConstraints = {
        width: 800,
        height: 500
    }

    return (
        <Box width='100dvw' height='100dvh'>
            <Stack direction='row' justifyContent='space-between' height='100%'>
                <Actions>
                    <ul>
                        <li>
                            <IconButton sx={{ color: 'var(--white)',
                                margin: 0,
                                '&:hover': {
                                    backgroundColor: 'var(--white)',
                                    color: 'black',
                                    transition: 'all .2s'
                                }
                            }}><i data-feather="camera"></i></IconButton>
                        </li>
                    </ul>
                </Actions>

                <Box alignContent='center' textAlign='center'>
                    <WebCam ref={webcam} videoConstraints={videoConstraints}
                    style={{ borderRadius: '10px', boxShadow: '0 40px 100px -80px var(--white)' }}/>
                    {
                        photo && <img src={ photo } alt="captura" />
                    }
                </Box>

                <Actions>
                    <ul>
                        <li>
                            <IconButton sx={{
                                color: 'var(--white)',
                                margin: 0,
                                '&:hover': {
                                    backgroundColor: 'var(--white)',
                                    color: 'black',
                                    transition: 'all .2s'
                                }
                            }}><i data-feather="maximize"></i></IconButton>
                        </li>
                    </ul>
                </Actions>
            </Stack>
        </Box>
    )
}

export default App
