import {createContext} from "react";

// her state bir initial state'e sahip olmalıdır!
export const AuthContext = createContext({}); // depo create

// props.children => react tarafından oto. bu component tagleri arasına yazılan yapıyı taşır.
export const AuthProvider = (props: any) => {
	return (
		<AuthContext.Provider value={{isAuthenticated: false}}>
			{props.children}
		</AuthContext.Provider>
	);
}; // depoyu uygulamaya sağlayacak component
