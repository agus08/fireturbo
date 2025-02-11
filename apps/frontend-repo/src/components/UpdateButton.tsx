import { Button } from "@repo/ui"
import SendIcon from '@mui/icons-material/Send';
import { ButtonProps } from "@mui/material";
import { useFormStatus } from "react-dom";

const UpdateButton = ({ ...props }: ButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button
      variant="contained"
      {...props}
      endIcon={<SendIcon />}
      fullWidth
      loading={pending}
    >
      Update
    </Button>
  )
}

export default UpdateButton