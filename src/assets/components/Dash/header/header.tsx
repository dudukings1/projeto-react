import { Usuarios } from "./nomes";
import "./header.css";
import { useState } from "react";
import { Search } from "lucide-react";

export function Header() {
const [ativo, setAtivo] = useState(false);

const [dentro, setdentro] = useState(false);

const [dentrosininho, setdentrosininho] = useState(false);
return (
    <>
        <div className="header">
        <Usuarios />
        <h1>qualquer coisa</h1>
        <div className="partedireita">
            <div
            className="sininho"
            onMouseEnter={() => setdentrosininho(true)}
            onMouseLeave={() => setdentrosininho(false)}
            style={{
                color: "rgba(134, 134, 134, 0.541)",
                border: dentrosininho
                ? "1px solid rgba(134, 134, 134, 0.541)"
                : "",
            }}
            >
            <p>◉</p>
            {dentrosininho && (
                <div className="caixahover">Centro de Avisos</div>
            )}
            </div>

            <div className="search">
            <Search className="lupa" size={18} />

            <input type="text" placeholder="Pesquisar..." className="input" />
            </div>

            <div
            className="perfil"
            onClick={() => setAtivo(!ativo)}
            onMouseEnter={() => setdentro(true)}
            onMouseLeave={() => setdentro(false)}
            style={{
                boxShadow: dentro ? "0px 0px 5px black" : "none",
                cursor: "pointer",
            }}
            ></div>
            </div>
        {ativo && (
            <div className="aparecer">
            <a href="">CONFIGURACOES DE CONTA</a>
            <div className="tema">
                <p>
                Tema
                <button>Dark</button>
                <button>light</button>
                <button>Sistem</button>
                </p>
            </div>
            <p>SAIR</p>
            </div>
        )}
        </div>
    </>
);
}
