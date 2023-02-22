export const AuthContext = createContext();

 export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const register = (username, email, password) => {
        setIsLoading(true);
        axios.post(`http://gilscore.azurewebsites.net/api/accounts/register/`, {
            username,
            email,
            password
        })
        .then(res => {
            console.log(res.data);
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.token);

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.token);
        })
        .catch(error => {
            console.log(`Registration error ${error}`);
        });
        setIsLoading(false);
    }
    const login = (username, password) => {
        setIsLoading(true);
        axios.post(`https://gilscore.azurewebsites.net/api/accounts/login/`, {
            username,
            password
        })
        .then(res => {
            console.log(res.data);
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.token);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.token);
        })

        .catch(error => {
            console.log(`Login error ${error}`);
        });
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false); 
    }

  


    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            userInfo = JSON.parse(userInfo);

            if (userInfo){
                setUserToken(userToken);
                setUserInfo(userInfo);
            }
            
            setIsLoading(false);
        } catch (error) {
            console.log(`isLogged in ${error}`);
        }  
        

    }

    useEffect( () => {
        isLoggedIn();
    }, []);

    // const getCurrentUser = async function () {
    //     const currentUser = await Parse.User.currentAsync();
    //     if (currentUser !== null) {
    //       Alert.alert(
    //         'Success!',
    //         `${currentUser.get('username')} is the current user!`,
    //       );
    //     }
    //     return currentUser;
    //   };
     
    return(
        <AuthContext.Provider value= {{login, logout, register, isLoading, userToken, userInfo }}>
            {children}
        </AuthContext.Provider>

    );
}