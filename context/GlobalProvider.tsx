import { GlobalContextType } from "@/definitions";
import { getCurrentUser } from "@/lib/appwrite";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext must be used within a context");

  return context;
};

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /*
    AVEC appwrite  
    useEffect(() => {
     
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoading(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      }); 
  }, []);*/

  /**
   * Ici on utilisera un mock user pour le moment
   */

  useEffect(() => {
    setIsLoading(true);

    const mockUser = {
      id: "12345",
      name: "JSMastery",
      email: "johndoe@aora.com",
    };

    const userExists = true; // Simuler que l'utilisateur existe

    if (userExists) {
      setIsLoggedIn(true);
      setUser(mockUser);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }

    setIsLoading(false);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
