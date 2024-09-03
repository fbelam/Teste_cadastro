import React from 'react';
import styled from 'styled-components';
import './css.css'; // Importando o arquivo de estilos

const Header = styled.header`
  /* Adicione aqui os estilos para o header */
`;

const Main = styled.main`
  /* Adicione aqui os estilos para o main */
`;

const Section = styled.section`
  /* Adicione aqui os estilos para as sections */
`;

const Footer = styled.footer;

const App = () => {
  return (
    <div>
      <Header>
        <h1 className="LOGO">LOGO</h1>
        <div className="espacamento">
          <h1 className="infos">HOJE</h1>
          <h1 className="infos">EXPLORAR</h1>
        </div>
        <div className="espaco">
          <h1 className="resto">SOBRE</h1>
          <h1 className="resto">BUSINESS</h1>
          <h1 className="resto">BLOG</h1>
        </div>
        <button className="entrahead">ENTRAR</button>
        <button className="criarconta">CRIAR CONTA</button>
      </Header>

      <Main>
        <div className="espacinho"></div>

        <Section className="parte01" id="section">
          <div className="imagem">
            <div className="preto">
              <h1 className="titulo1">ENCONTRE SUA PRÓXIMA</h1>
            </div>
            <div className="amarelo">
              <h1 className="titulo2">IDEIA PARA UM JANTAR ESPECIAL</h1>
              <div className="carrossel">
                <a href="#parte02">
                  <img src="./img/bola_preta.png" alt="circulo" className="seta" />
                </a>
              </div>
            </div>
          </div>

          <div className="teste">
            <div className="centralizando">
              <div className="molde1">
                <img src="./img/batata-e-carne.jpg" alt="comida" className="imagens" />
              </div>
              <div className="molde2">
                <img src="./img/burger.jpg" alt="comida" className="imagens" />
              </div>
              <div className="molde3">
                <img src="./img/linda.jpg" alt="comida" className="imagens" />
              </div>
              <div className="molde4">
                <img src="./img/otaro.jpg" alt="comida" className="imagens" />
              </div>
              <div className="molde5">
                <img src="./img/costela.jpg" alt="comida" className="imagens" />
              </div>
              <div className="molde6">
                <img src="./img/arroz-feijao.jpg" alt="comida" className="imagens" />
              </div>
            </div>
          </div>
          <div className="next">VEJA COMO FUNCIONA:</div>
        </Section>

        <Section className="parte02" id="parte02">
          <div className="monteImagens">
            <div className="superiorDireito">
              <img src="./img/designer-using-3d-printer (1).jpg" alt="pressora3d" className="imagensSD" />
            </div>
            <div className="inferiorDireito">
              <img src="./img/designer-using-3d-printer (2).jpg" alt="pressora3d" className="imagensID" />
            </div>
            <div className="esquerda">
              <img src="./img/designer-using-3d-printer.jpg" alt="pressora3d" className="imagensE" />
            </div>
            <div className="central">
              <img src="./img/GENDER_1.JPG" alt="pressora3d" className="imagensC" />
              <div className="pesquisa">
                <img src="./img/search_90dp_000000_FILL0_wght700_GRAD0_opsz48.png" alt="lupa" className="lupa" />
                <p className="textoLupa">Vaso de Flores</p>
              </div>
            </div>
          </div>
          <div className="TextoMerchant">
            <div className="centralizandoTexto">
              <h1 className="titulopg2">Procure uma ideia</h1>
              <p className="texto2">
                O que você deseja imprimir?
                <br />
                Qual o material?
                <br />
                Procure algo do seu interesse como
                <br />
                “manopla do infinito”
                <br />
                e veja as impressoras 3D mais perto
                <br />
                de você
              </p>
              <button className="buscar">Buscar</button>
            </div>
          </div>
        </Section>

        <Section className="parte03" id="parte03">
          <div className="texto03">
            <div className="centralizandoTexto03">
              <h1 className="titulopg2">Descubra novas possibilidades</h1>
              <p className="texto2">
                Salve novas ideias nos favoritos para acessá-los
                <br />
                posteriormente
              </p>
              <button className="buscar">Explorar</button>
            </div>
          </div>

          <div className="centralizandoImagens03">
            <div className="inicial">
              <div className="grande">
                <div className="BIG">
                  <img src="./img/torre.png" alt="torre" className="imgBIG" />
                </div>
                <div className="mediumL">
                  <img src="./img/impressao-3d.png" alt="batman" className="imgBAT" />
                </div>
              </div>

              <div className="pekena">
                <div className="mediumR">
                  <img src="./img/pasted image 0.png" alt="einstein" className="einstein" />
                </div>
                <div className="SMALL">
                  <img src="./img/3dprinted-1.png" alt="osso" className="ossos" />
                </div>
                <div className="mediumR">
                  <img src="./img/IMG_1008-1.png" alt="kratos" className="einstein" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="parte04" id="parte04">
          <div className="imagemFundo">
            <img src="./img/images (1) 1.png" alt="treco" className="background" />
          </div>

          <div className="fundoTexto">
            <h1 className="titulopg2">
              Veja, faça,
              <br />
              planeje, crie
            </h1>
            <p className="texto2">
              Descubra as melhores ideias para
              <br />
              impressões 3D de pessoas
              <br />
              do mundo todo
            </p>
            <button className="buscar">Explorar</button>
          </div>
        </Section>
      </Main>

      <Footer>
        <Section className="parteFinal">
          <div className="textoFinal">
            <h1 className="TituloFinal">
              Inscreva-se
              <br />
              para ver
              <br />
              ideias
            </h1>
          </div>
          <div className="DivCadastro">
            <div className="Cadastro">
              <h1 className="LOGOFINAL">LOGO</h1>
              <h1 className="titulo">Bem Vindo(a) ao One Piece</h1>
              <p className="textoCadastro">Experimente novas ideias</p>

              <label htmlFor="email" className="email">
                Email:
                <input type="text" className="input" placeholder="  Email" />
              </label>

              <label htmlFor="senha" className="senha">
                Senha:
                <input type="text" className="input" placeholder="  Senha" />
              </label>

              <label htmlFor="dataNascimento" className="dataNascimento">
                Data de Nascimento:
                <input type="date" className="input" />
              </label>

              <button className="continuar">Continuar</button>
              <h2>OU</h2>
              <div className="Google">
                <div className="png">
                  <img src="./img/google-37.png" alt="google" className="icon" />
                </div>
                <div className="espacoInput">
                  <button className="inputGoogle">Continuar com o Google</button>
                </div>
              </div>

              <p className="Termos">
                Ao continuar, você concorda com os Termos de Serviços do Pinterest e confirma que leu nossa Política de
                Privacidade. Aviso na coleta de informações
              </p>

              <a href="#" className="entrar">
                Já tem uma conta? Entrar
              </a>

              <div className="ultima">Criar uma conta Business gratuita</div>
            </div>
          </div>
        </Section>
      </Footer>
    </div>
  );
};

export default App;
