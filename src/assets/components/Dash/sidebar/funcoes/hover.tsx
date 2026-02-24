import { useState } from "react"
import type { ReactNode } from "react"

type IconHoverProps = {
children: ReactNode
}

function IconHover({ children }: IconHoverProps) {
const [hover, setHover] = useState(false)

return (
    <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
        transform: hover ? "scale(1.5)" : "scale(1)",
        transition: "0.2s",
        cursor: "pointer"
    }}
    >
    {children}
    </div>
)
}

export default IconHover
