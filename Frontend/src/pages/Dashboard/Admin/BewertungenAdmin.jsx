import React, { useContext } from 'react'
import AuthContext from '../../../../store/AuthContext';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch'


function BewertungenAdmin() {
    const getHotelsURL = import.meta.env.VITE_API_HOTELS
    const getUsersURL = import.meta.env.VITE_API_USERS

    const {data:users,error:errorUsers} = useFetch(getUsersURL)
    const {data:hotels, error:errorHotels} = useFetch(getHotelsURL)
    const { state } = useContext(AuthContext);
    const user = state.user;
    const navigate = useNavigate();
    const { isAdmin } = state.user;
  return (
    <div>BewertungenAdmin</div>
  )
}

export default BewertungenAdmin