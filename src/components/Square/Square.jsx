import React from "react"

export function Square({onClickColor, color}) {
    return (
        <>
            <div style={{ width: '100px', height: '100px', backgroundColor: color }}
                 onClick={onClickColor}>
            </div>
        </>
    )
}