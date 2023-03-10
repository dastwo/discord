import React from 'react'
import {Typography} from '@mui/material'
import {styled} from '@mui/system'

const RedirectText = styled('span')({
    color:'#00aff4',
    fontWeight:500,
    cursor:'pointer'
})

const RedirectInfo = ({text, redirectText, additionalStyles, redirectHandle}) => {
  return (
    <Typography sx={{color:'#72767d'}}
    style={additionalStyles ? additionalStyles : {}} variant='subtitle2'>{text}
    <RedirectText onClick={redirectHandle}>
        {redirectText}
    </RedirectText>
    </Typography>
  )
}

export default RedirectInfo