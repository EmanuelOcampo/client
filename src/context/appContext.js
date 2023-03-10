import React, {useReducer, useContext } from "react"
import axios from 'axios'
import reducer from "./reducer"
import { 
    DISPLAY_ALERT, 
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR
} from "./actions"

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

const initialState ={
    isLoading:false,
    showAlert:false,
    alertText:"",
    alertType:"",
    user: user? JSON.parse(user) : null,
    token: token,
    userLocation:userLocation || "",
    jobLocation:userLocation || "",
    showSidebar:false,
    isAdmin:false
}

const AppContext = React.createContext()

const AppProvider =  ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //axios global setup
    // axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`

    //axios custom instance
    const authFetch = axios.create({
        baseURL: '/api/v1',
    })

    //request to axios 
    authFetch.interceptors.request.use(
        (config) => {
            config.headers['Authorization'] = `Bearer ${state.token}`
            return config
        },
        (error) => {
            console.log(error);
            return Promise.reject(error) 
        }
    )


    //response to axios 
    authFetch.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            console.log(error.response);
            if (error.response.status === 401) {
                logoutUser()
            }
            return Promise.reject(error)
        }
    )

    //declare the display alert function 
    const displayAlert = () => {
        dispatch({type:DISPLAY_ALERT})
        clearAlert();
    }

    //clear the display alert for 3seconds
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT})
        }, 3000);
    }

    //SAVE THE USER,TOKEN,LOCATION IN LOCAL STORAGE
    const addUserToLocalStorage = ({user,token, location }) => {
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('location',location)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('location')
    }

    //REGISTER USER FUNCTION
    const registerUser = async (currentUser) => {
        dispatch({type: REGISTER_USER_BEGIN })
        try {
            //connect to backend using axios 
            //specific route to access back end
            const response = await axios.post('/api/v1/auth/register',
            currentUser)
            // console.log(response);
            const {user, token, location} = response.data
            dispatch({

                //passing an data to backend using payload
                type:REGISTER_USER_SUCCESS,
                payload:{
                    user,
                    token,
                    location
                },
            })
            addUserToLocalStorage({user, token, location})
        } catch (error) {
            // console.log(error.response);
            dispatch({
                type:REGISTER_USER_ERROR, 
                payload:{ msg: error.response.data.msg },
            })
        }
        clearAlert()
    }


    //LOGIN USER
    const loginUser = async (currentUser) => {
        dispatch({type: LOGIN_USER_BEGIN })
        try {
            const {data} = await axios.post('/api/v1/auth/login',
            currentUser)
            const {user, token, location} = data

            //passing an data to backend using payload
            dispatch({
                type:LOGIN_USER_SUCCESS,
                payload:{
                    user,
                    token,
                    location
                },
            })
            addUserToLocalStorage({user, token, location})
        } catch (error) {
            dispatch({
                type:LOGIN_USER_ERROR, 
                payload:{ msg: error.response.data.msg },
            })
        }
        clearAlert()
        
    }

    const toggleSidebar = () =>{
        dispatch({type: TOGGLE_SIDEBAR})
    }

    const logoutUser = () => {
        dispatch({type: LOGOUT_USER})
        removeUserFromLocalStorage()
    }

    const updateUser= async (currentUser) => {
        dispatch({type:UPDATE_USER_BEGIN})
        try {
            //connect to backend using axios 
            //specific route to access back end
            const {data} = await authFetch.patch("/auth/updateUser", currentUser)
            
            const {user, location, token} = data

            //passing an data to backend using payload
            dispatch({
                type:UPDATE_USER_SUCCESS, 
                payload:{
                    user,
                    location,
                    token
                }
            })
            addUserToLocalStorage({user,location,token})        
            // console.log(data);
          
        } catch (error) {
            if (error.response.status !== 401) {
                dispatch({
                    type:UPDATE_USER_ERROR, 
                    payload:{
                        msg: error.response.data.msg
                    }
                })
            }
            // console.log(error.response);
        }
        clearAlert()    
    }




    return(
        <AppContext.Provider value={{
            ...state,
            displayAlert,
            registerUser, 
            loginUser,
            toggleSidebar, 
            logoutUser,  
            updateUser
            
            }}>{children}
        </AppContext.Provider>
    )
} 



const useAppContext =() =>{
    return useContext(AppContext)
}   

export {AppProvider, initialState, useAppContext}