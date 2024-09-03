import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 10px;
`;

const FormsContainer = styled.form`
    margin-left: 10%;
    display: flex;
    background-color: black;
    gap: 10px;
    flex-wrap:  wrap;
    background-color: #fff;
    padding: 200px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    flex-direction: column;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2); /* Cor branca com 20% de opacidade */
    backdrop-filter: blur(10px); /* Adiciona um efeito de desfoque de fundo */
    color: #0a0909; /* Texto branco */
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ddddff;
    `;

const Input = styled.input`
    width: 80%;
    padding: 0 10%;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    `;

const Label = styled.label``;

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

function App(){
  return (
    <>
      <h2>Cadastro Projetista</h2>
      <Container>
      <FormsContainer>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type='email'/>
      </InputArea>
      <InputArea>
        <Label>Senha</Label>
        <Input name="email" type='password'/>
      </InputArea>
      <Form/>
      </FormsContainer>    
      </Container>
    </>
  )
}

export default App
