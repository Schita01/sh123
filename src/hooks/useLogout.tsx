
const useLogout = () => {

    
    const logOut = () => {
        window.localStorage.removeItem("token")
    }


    return [logOut]
  
}

export default useLogout
