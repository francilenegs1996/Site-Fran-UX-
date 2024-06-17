import { ContainerNavBar, Item } from './style'

export default function NavBar() {

	const arrayItens = [
		{ nome: 'Home', link: '/' },
		{ nome: 'Sobre', link: '/sobre' },
		{ nome: 'Contato', link: '/contato' },
		{ nome: 'Login', link: '/login' },
		{ nome: 'Login2', link: '/login2' },

	]

	return (
		<ContainerNavBar>
			{arrayItens.map(itemDoArray => {
				return <Item href={itemDoArray.link}>{itemDoArray.nome}</Item>
			})}
		</ContainerNavBar>
	)
}
