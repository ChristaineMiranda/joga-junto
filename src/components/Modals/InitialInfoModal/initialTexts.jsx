import styled from "styled-components"
export function AboutUs() {
    return (
        <ContainerText>
            <Text><Highlight>Joga-junto</Highlight> é uma plataforma de palpites para os jogos do Campeonato Brasileiro de Futebol Feminino <Emphasis>(o nosso Brasileirão!)</Emphasis>.</Text>
            <Text>
                Foi desenvolvido para acompanhar os resultados dos jogos junto de amigos e familiares, estimulando o envolvimento de cada vez mais pessoas no universo do esporte feminino, essa potência que ainda carece de valorização e visibilidade não só no Brasil como ao redor do mundo.

                O projeto foi concebido, planejado e implementado de forma autoral como prática de aperfeiçoamento no desenvolvimento web. Ele nasce da intenção de unir a paixão pelo esporte, a vontade de contribuir com a promoção das mulheres no futebol e a oportunidade de construir uma plataforma do 0 para refinar as habilidades de desenvolvimento full stack.

            </Text>
            <ExternalLink>
                <div>- Conheça a autora -</div>
                <div>
                    <a href="https://github.com/ChristaineMiranda" target="_blank" rel="noopener noreferrer">GitHub por aqui!</a>
                </div>
            </ExternalLink>
            <Text>
                Essa é uma aplicação ainda em desenvolvimento e que prentende expandir sua cobertura para outras divisões e, quem sabe, modalidades esportivas.
                Espero que garanta divertimento e desperte curiosidade e afetos por nossos clubes e suas campanhas, mas, principalmente, pelas estrelas desse show: nossas jogadoras!
            </Text>
            <Text>
                Agora, vamos lá! Fique a vontade pra jogar junto!
            </Text>
        </ContainerText>
    );
}

export function HowWorks(){
    return (
        <ContainerText>
            <Text>Pra começar a palpitar e chamar sua galera pra vir junto, é bem simples</Text>
            <Text>Se cadastrar: cadastre-se na plataforma para começar a usar. Escolha nome e foto para serem exibidos na plataforma. Forneça o link da imagem</Text>
            <Text>Junte-se ou crie seu grupo: A dashboard mostra o ranking geral com todos os usuários e os grupos que você já participa. Acesse a página de grupos para se juntar um grupo já existente ou crie o seu</Text>
            <Text>Palpite! Com o cadastro e escalado em um grupo, agora é só chutar os placares e torcer pelo gol!</Text>
            <Text>Se o jogo já estiver acontecendo você não pode fazer um palpite para ele, aproveite pra investir nos jogos seguintes</Text>
            <Text>Quando o jogo estiver finalizado e os resultados forem lançados, seus palpites serão analisados e a pontuação atualizada</Text>
            <Text><Highlight> Aqui seus palpites em um determinado grupo geram uma pontuação específica dentro deste mesmo grupo. No ranking geral você verá sua maior pontuação realizada em algum dos grupos existentes.</Highlight></Text>
        </ContainerText>
    )
}

export function Punctuation(){
    return(
        <ContainerText>
            <Highlight>Pontuação</Highlight>
          
            <Text>Se acertou o placar em cheio: + 3 pontos</Text>
            <Text>Se acerto o vencedor, mas errou no placar final: + 1 ponto</Text>
            <Text>Se errou o placar e o vencedor... fica pra próxima!</Text>
            <Text><Highlight>Lembre-se que a pontuação está associada a cada grupo que você participa, ou seja, se você fizer apostas diferentes para um mesmo jogo, em grupos diferentes, pode ter pontuações diferentes dependendo do resultado</Highlight></Text>
        </ContainerText>
    )
}

const Text = styled.div`
    margin-top: 10px;
`;
const ContainerText = styled.div`
color: #012401;    
`;
const Highlight = styled.span`
    font-weight: 800;
    font-size: 13px;
`
const Emphasis = styled.span`
    font-weight: 300;
    color: #034b15;
`
const ExternalLink = styled.div`
    background-color: purple;
    font-size: 15px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-weight: 400;
    border-radius: 5px;
    color: #FFFFFF;
    margin-top: 15px;
    margin-bottom: 15px;
    a{
     text-decoration: none;
     &:visited{
     color: inherit;
}
}
    

`
