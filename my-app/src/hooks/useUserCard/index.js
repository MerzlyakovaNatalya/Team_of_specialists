import { useNavigate } from 'react-router-dom'
import { getUsersData } from '../../store/users/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuth, reset } from '../../store/users/actions'

export const useUserCard = (userId) => {
    const users = useSelector(getUsersData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const user = users.find(({ id }) => id === Number(userId))
  
    const harkBack = () => {
      navigate(-1)
    }
  
    const getExit = () => {
      navigate('/')
      localStorage.removeItem('token_auth')
      dispatch(setIsAuth(true))
      dispatch(reset())
    }
    return [
        user,
        harkBack,
        getExit
    ]
}
