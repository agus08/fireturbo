"use client"

import { Box } from "@mui/material"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { SET_LOADING, SET_USER } from "@/store/reducers"
import { RootState } from "@/store/store"
import { fetchUserApi } from "@/app/actions"
import { useAuth } from "@/app/auth/AuthContext"
import UserForm from "./UserForm"

const UserDetail = () => {
  const authUser = useAuth()
  const dispatch = useDispatch()

  const fetchData = async () => {
    if (!authUser?.user?.uid) return
    dispatch(SET_LOADING(true))
    const userData = await fetchUserApi(authUser.user.uid);
    dispatch(SET_USER(userData))
    dispatch(SET_LOADING(false))
  }

  useEffect(() => {
    if (authUser?.user?.uid) {
      fetchData()
    }
  }, [authUser])

  const userState = useSelector((state: RootState) => state.user, shallowEqual)
  return (
    <Box sx={{
      width: 330,
      margin: 'auto',
    }}>
      <h1>{userState?.user?.name}</h1>
      {userState.loading && <p>Loading...</p>}
      {userState.user && (
        <UserForm user={userState.user} />
      )}
    </Box>
  )
}

export default UserDetail