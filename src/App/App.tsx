import { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Home from '../pages/Home/Home';
import { Container } from './style';
export default function App() {


    const [page, setPage] = useState(Home)


    return (
        <Container>
            <NavBar setPage={setPage} />
            {page}
        </Container>
    )
}
