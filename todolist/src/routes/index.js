import React, {useContext} from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { AuthGoogleContext } from '../context/authGoogle'

export const PrivateRoutes= () => {
    const {signed} = useContext(AuthGoogleContext)
    return signed ? < Outlet/> : <Navigate to="/"/>
}
