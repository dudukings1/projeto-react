import { useState } from "react"
import { Graficos } from "./graficos"
import "./partecima.css"
import { useLocation } from "react-router-dom"

import {
Info,
Database,
TriangleAlert
} from "lucide-react"

export function Partecima() {
    const [dentro, setDentro] = useState(false)
    

    return (
    <section>
        <div className="parteprincipal">
        <div className="bemvindo">
            <h5>| inicio</h5>
            
        <div className="organizar">
            <section>
            <span className="alinhar">
            <div
                className="primeiras-caixas"
                onMouseEnter={() => setDentro(true)}
                onMouseLeave={() => setDentro(false)}
            >
                <div
                style={{
                    transform: dentro ? "rotate(90deg)" : "rotate(0deg)",
                    fontSize: "12pt",
                    transition: "all 0.6s ease-in-out",
                    color: "rgb(238, 238, 238)"
                }}
                >
                ○○○
                </div>
            </div>

            <div style={{
                color: "white"
            }}>Informacoes</div>
            </span>
            <span className="alinhar">
            <div className="primeiras-caixas">
                <Info />
            </div>

            <div className="alinhando-caixas-dentro">
                <div style={{
                color: "white"
            }}>Status</div>
                <p>Healthy</p>
            </div>
            </span>
            </section>
            <section>
            <span className="alinhar">
            <div className="primeiras-caixas">
                <TriangleAlert />
            </div>
            <div style={{
                color: "white"
            }}>Problemas</div>
            </span>
            <span className="alinhar">
            <div className="primeiras-caixas">
                <Database />
                
            </div>
                <div style={{
                color: "white"
            }}>Estudos</div>
                </span>
            </section>
            </div>
            <p>🇧🇷 | Modelo de Dashboard</p>
            
        </div>
        </div>

        <Graficos />
    </section>
)
}
