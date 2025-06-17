import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
	display:flex;
	align-itens:center;
	justify-content: center;

	& ul {
		display: flex;
		align-items:center;
		gap:1.5em;
		padding:0;
		margin:0;
		list-style:none;
		border-top:2px solid gray;
		margin-top: 6rem;
		margin-bottom: 1rem;
		border-top:2px solid gray;
		padding: 1rem 0 0 0;

			@media (min-width:769px){
				border:0;
				margin:0;
			}
	}

	&  li:last-child a{
		margin:0;
		padding: .5rem 1rem;
		border-radius:6px;
		background: var(--primary);
		color: white;
	}
`;

export const ActionUser = () => {
	return (
		<Container>
			<ul>
				<li>
					<Link to="/NewUser"> Cadastre-se</Link>
				</li>
				<li>
					<Link to="/Login"> Entrar </Link>
				</li>
			</ul>
		</Container>
	)
}