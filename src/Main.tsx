import { useContext } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomeTab from "./Views/Home";
import { ThemeContext } from "./contexts/themeContext";
import SinglePerson from "./Views/SinglePerson";
import NotFound from "./Views/NotFound";
import Nav from "./components/Navbar";

const Main = () => {
    const { theme } = useContext(ThemeContext)

    const darkTheme = createTheme({
        palette: {
          mode: theme,
          primary: {
            main: '#0ABF63',
          }
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router>
                <div className="min-h-screen dark:bg-[#131619] transition ease-in-out delay-150">
                    <Nav />

                    <div className="container mx-auto px-4">
                        <Routes>
                            <Route path='/' element={<HomeTab />} />
                            {/* <Route path="/wallet" element={<WalletTab />} /> */}
                            <Route path="/people/:id" element={<SinglePerson />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default Main;