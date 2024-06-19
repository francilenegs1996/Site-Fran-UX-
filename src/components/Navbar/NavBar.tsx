import { Dispatch, SetStateAction } from 'react';
import Curriculo from '../../pages/Curriculo/Curriculo'
import Home from '../../pages/Home/Home'
import { NavBarComponent, ItemComponent } from './style'


interface Props {
    setPage: (page: JSX.Element) => void | Dispatch<SetStateAction<JSX.Element>>;
}


export default function NavBar({setPage}: Props) {


    const arrayItens = [
        { nome: 'Home', link: '#', page: Home },
        { nome: 'Curriculo', link: '#', page: Curriculo },
    ]


    return (
        <NavBarComponent>
            {arrayItens.map(item => (
                <ItemComponent
                    onClick={() => setPage(item.page())}
                    href={item.link}>
                    {item.nome}
                </ItemComponent>
            ))}


        </NavBarComponent>
    )
}
