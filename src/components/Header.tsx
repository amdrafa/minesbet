/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";
import { ButtonPrimary } from "./ButtonPrimary";

const ContainerHeader = styled.header`
	padding-top: 1.5rem;
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	/* background-color: ${({ theme }) => theme.COLORS.BACKGROUND}; */

	.button-header {
		margin-right: 1.5rem;
	}

	@media (max-width: 945px) {
		justify-content: center;

		.button-header {
			display: none;
		}
	}
`;

export function Header() {
	return (
		<ContainerHeader>
			<Link href="/">
				<div className="logo">
					<img src={"/mines-logo-pequena.png"} alt="Logo Mines Bet" />
				</div>
			</Link>
			<Link href="https://go.aff.7k-partners.com/t5mztzcf?source_id=MinesFacebookAnuncio" target="_blank">
				<ButtonPrimary
					className="button-header"
					title="Entrar na bet.7k"
					style={{ height: "45px", maxWidth: "250px" }}
					iconRight={<FaArrowRight size={23} />}
				/>
			</Link>
		</ContainerHeader>
	);
}
