import "./login.css";
import { KeyRound, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




export function Login() {
const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [senha, setSenha] = useState("");

const [ativo, setativo] = useState(false);

function estarativo(){
  setativo(!ativo)
}
interface Usuarios {
  id?: number;
  email: string;
  senha: string;
}

useEffect(() => {
  async function validarinput() {
    if (ativo === false) return;
    try {
  
      const resp = await fetch("http://localhost:3000/users");
      const dados: Usuarios[] = await resp.json();
      const dadosarrumado = dados.map(user => user.email).join(', ')
      const dadosarrumado2 = dados.map(user => user.senha).join(', ')
      console.log(dadosarrumado)
      console.log(dadosarrumado2)

    } catch (erro){
      window.alert('nao deu certo')
    }
  }
  validarinput();
}, [ativo])



// Função que alterna entre as telas
  function trocar() {
    if (activeTab === 'login') {
      setActiveTab('register');
    } else {
      setActiveTab('login');
    }
  }

  return (
    <>
      <div style={{
        width: '100%',
        backgroundColor: "rgb(7, 13, 26)",
        display: "flex",
        justifyContent: "center"
      }}>
        <div
          className="fontes"
          style={{
            backgroundColor: "rgb(7, 13, 26)",
            width: "550px",
            height: "110vh",
            display: "flex", // Adicionei para alinhar tudo
            flexDirection: "column",
            alignItems: "center", // Centraliza o conteúdo
            paddingTop: "50px"
          }}
        >
          <header style={{ width: "300px", marginBottom: "20px" }}>
            <h1 style={{
              fontSize: "24pt",
              letterSpacing: "1px",
              color: "#fff" // Garante que o texto apareça no fundo escuro
            }}>
              {/* Título muda conforme a tela */}
              {activeTab === 'login' ? 'Faça seu login' : 'Crie sua conta'}
            </h1>
          </header>

          <section style={{
            width: "70%",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center"
          }}>
            
            {/* --- LÓGICA DE TROCA DE TELA --- */}
            {activeTab === 'login' ? (
              /* === TELA DE LOGIN === */
              <>
                <div style={{ marginBottom: "15px" }}>
                  <p className="cima-input">E-mail ou usuário</p>
                  <input type="text" className="inputs" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <p className="cima-input">Senha</p>
                  <input type="password" className="inputs" value={senha} onChange={(e) => setSenha(e.target.value)}/> {/* Mudei para password */}
                </div>

                <button className="botao1" onClick={estarativo}>Entrar</button>

                <div className="divider">
                  <span className="line"></span>
                  <span className="text">or</span>
                  <span className="line"></span>
                </div>

                <button className="google-btn">
                  <img
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="Google logo"
                    className="google-icon"
                  />
                  Continue with Google
                </button>

                <p className="p2" style={{ marginTop: '15px', color: '#8b949e' }}>
                  Não tem uma conta?
                  <span 
                    onClick={trocar} 
                    style={{ paddingLeft: "5px", color: "#4493f8", cursor: "pointer", fontWeight: "bold" }}
                  >
                    Crie uma conta
                  </span>
                </p>

                <Link 
  to="/passkey" 
  style={{ textDecoration: 'none' }} // Remove o sublinhado do link
>
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: "center",
    gap: '8px', 
    cursor: "pointer",
    marginTop: '10px' 
  }}>
    <KeyRound size={18} strokeWidth={1.5} color="#4493f8" />
    <span style={{ 
      color: '#4493f8', 
      fontSize: '14px', 
      fontWeight: 500,
      fontFamily: 'system-ui, sans-serif' // Fonte clean que definimos
    }}>
      Sign in with a passkey
    </span>
  </div>
</Link>
              </>
            ) : (

            <>
                
                 <button className="google-btn">
                  <img
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="Google logo"
                    className="google-icon"
                  />
                  Continue with Google
                </button>
                <div className="divider">
                  <span className="line"></span>
                  <span className="text">or</span>
                  <span className="line"></span>
                </div>

               
                <div style={{ marginBottom: "15px" }}>
                <p className="cima-input">Nome completo</p>
                <input type="text" className="inputs" />
                <p style={{
                    fontSize: "13px",
                    color: "grey",
                    margin: "3px",
                    fontWeight: "600"
                    
                }}>Não use seu nome real, crie um nome ficticio.</p>
                </div>
                <div style={{ marginBottom: "15px" }}>
                <p className="cima-input">E-mail</p>
                <input type="email" className="inputs" />
    
                </div>
                <div style={{ marginBottom: "15px" }}>
                <p className="cima-input">Senha</p>
                <input type="password" className="inputs" />
                <p style={{
                    fontSize: "13px",
                    color: "grey",
                    margin: "3px",
                    fontWeight: "600"
                }}>A senha deve conter 8 carácters que deve ter letras minusculos, maiuscula e número.</p>
                </div>

                <button className="botao1">Cadastrar</button>

                <p className="p2" style={{ marginTop: '15px', color: '#8b949e' }}>
                Já tem uma conta?
                <span 
                    onClick={trocar} 
                    style={{ paddingLeft: "5px", color: "#4493f8", cursor: "pointer", fontWeight: "bold" }}
                >
                    Faça login
                </span>
                </p>
            </>
            )}
            
            </section>

            <footer style={{ marginTop: "auto", paddingBottom: "20px" }}>
            <p style={{ color: "#8b949e" }}>Seja bem vindo</p>
            </footer>
        </div>
        </div>
    </>
);
}