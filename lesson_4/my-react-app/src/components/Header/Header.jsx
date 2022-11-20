
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


export default function Header({ children }) {
    return (
        <header className="App-header">
            <h1>My React</h1>
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
                <Link to="/home">Главная</Link>
                <Link to="/сhatList">Список чатов</Link>
                <Link to="/profile">Личный кабинет</Link>

            </Container>
        </header>
    );
}






// export default function SimpleContainer() {
//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <Container maxWidth="sm">
//                 <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
//             </Container>
//         </React.Fragment>
//     );
// }