import {createContext, useState} from "react";

// her state bir initial state'e sahip olmalıdır!
export const AuthContext = createContext({}); // depo create

// props.children => react tarafından oto. bu component tagleri arasına yazılan yapıyı taşır.
export const AuthProvider = (props: any) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
			{props.children}
		</AuthContext.Provider>
	);
}; // depoyu uygulamaya sağlayacak component

// KALICI HAFIZA DEĞİLDİR!!
