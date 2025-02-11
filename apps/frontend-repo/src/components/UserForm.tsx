import { Box, FormLabel, TextField } from "@mui/material"
import { IUser } from "@repo/types"
import { useEffect, useState } from "react"
import UpdateButton from "./UpdateButton"
import { updateUserApi } from "@/app/actions"
import { useFormState } from "react-dom"
import { useDispatch } from "react-redux"
import { SET_USER } from "@/store/reducers"

const UserForm = ({ user }: { user: IUser }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>(user.name || '')
  const [numberOfRents, setNumberOfRents] = useState<number>(user.numberOfRents)
  const [state, action] = useFormState(updateUserApi, { success: true });

  useEffect(() => {
    if (state.success) {
      dispatch(SET_USER({ ...user, name, numberOfRents }))
    }
  }, [state])

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      component="form"
      action={action}
    >
      <FormLabel htmlFor="numberOfRents">Name</FormLabel>
      <TextField
        name="name"
        required
        hiddenLabel
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <FormLabel htmlFor="numberOfRents">Number of Rents</FormLabel>
      <TextField
        name="numberOfRents"
        required
        hiddenLabel
        onChange={(e) => setNumberOfRents(Number(e.target.value))}
        value={numberOfRents}
      />
      <input type="hidden" name="userId" value={user.id} />
      <UpdateButton onClick={() => console.log('submit')} type="submit" />

    </Box>

  )
}
export default UserForm