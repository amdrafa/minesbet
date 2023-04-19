/* eslint-disable @next/next/no-img-element */
import { ContainerCardTips } from "./styles";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
const TypeAnimation = dynamic(() => import("react-type-animation").then((r) => r.TypeAnimation), {
	ssr: false,
});

const TIPS = [
	`Antes de fazer as escolhas, é fundamental ter um conhecimento aprofundado sobre os jogos e esportes em que se deseja apostar. Portanto, é recomendável que você se familiarize com as regras e estratégias dos jogos e esportes antes de fazer suas apostas.`,
	`Fique por dentro das últimas notícias e tendências das tecnologias, isso pode afetar diretamente suas resultados. Conhecimento vindo das pessoas certas é fundamental para aumentar suas chances de sucesso nas apostas.`,
	`É crucial que você tenha uma estratégia de apostas bem definida antes de começar a jogar, pois isso o ajudará a manter o controle sobre suas ações.`,
	`Para evitar gastar mais dinheiro do que você pode perder, é fundamental estabelecer limites claros para as perdas que está disposto a suportar antes de começar a apostar. Dessa forma, você poderá ter um controle melhor sobre suas despesas e evitar perder dinheiro além do que planejou, tornando suas apostas mais seguras e conscientes.`,
	`Deve-se manter um registro minucioso de todas as suas apostas, incluindo o valor e o resultado, é essencial para avaliar sua estratégia ao longo do tempo. Esse registro pode ajudá-lo a identificar padrões e tendências em suas apostas, permitindo que você faça ajustes em sua estratégia e melhore seu desempenho no longo prazo. `,
	`Para tomar decisões de apostas mais precisas e conscientes, é fundamental evitar que suas emoções interfiram no processo. Por isso, mantenha-se calmo e siga sua estratégia, evitando fazer escolhas impulsivas ou influenciadas por sentimentos momentâneos.`,
	`Sempre escolha uma casa de aposta confiável: Nossa inteligência artificial funciona na bet 7k, uma casa bem estabelecida e prearada para evitar fraudes e garantir a segurança de seus dados / dinheiro.`,
	`Para tomar decisões de apostas mais precisas e conscientes, evite seguir a multidão e fazer apostas apenas porque a maioria das pessoas está fazendo. Em vez disso, use sua própria análise e ajuda da inteligência artificial para tomar decisões estratégicas.`,
	`Para alcançar o sucesso nas apostas, é fundamental manter a calma e a paciência, mesmo quando ocorrem perdas. Não se desespere ou mude sua estratégia de forma impulsiva, mantenha o foco e a disciplina para alcançar seus objetivos.`,
];

export function CardTips() {
	const [tips, setTips] = useState<(string | number)[]>([]);

	useEffect(() => {
		const tipsRandomized = TIPS.sort(() => Math.random() - 0.5);

		// add number 2000 after each tip
		const tipsWithNumber = tipsRandomized
			.map((tip, index) => {
				return [tip, 2000];
			})
			.flat();

		setTips(tipsWithNumber);
	}, []);

	return (
		<ContainerCardTips>
			<div className="logo-and-name">
				<img width={'130px'} src={"/mines-logo-pequena.png"} alt="Logo mines bet" />
				<div className="name">
					<h5>GWinz</h5>
					<p>Inteligência Artificial</p>
				</div>
			</div>
			<p className="title">Recomendações:</p>
			<p className="description">
				<TypeAnimation
					sequence={tips}
					wrapper="div"
					cursor={true}
					speed={60}
					deletionSpeed={99}
					repeat={Infinity}
				/>
			</p>
		</ContainerCardTips>
	);
}
