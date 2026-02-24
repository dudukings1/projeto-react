type nomeusuario = {
        nome?: string,
    }

export function Usuarios({nome}: nomeusuario) {
    return (
        <>{nome}</>
    )
}
