import React from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import {connect} from 'react-redux'
import {getActions} from '../store/action/AlertActions'

const AlertNotification = ({ showAlertMessage, closeAlertMessage, alertMessageContent}) => {
  return (
    <Snackbar anchorOrigin={{vertical:'bottom', horizontal:'center'}} open={showAlertMessage} onClose={closeAlertMessage} autoHideDuration={6000}>
       
        <Alert severity='info'> {alertMessageContent}</Alert>
    </Snackbar>
  )
}

const mapStoreToState = ({alert})=>{
    
    return {
        ...alert
    }
}

const mapActionsToProps = (dispatch)=>{
    
    return {
        ...getActions(dispatch)
    }
}

export default connect(mapStoreToState, mapActionsToProps) (AlertNotification)