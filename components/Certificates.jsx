import React from "react"
import certificates from "../certificates"

export default function Certificates() {
    return (
        <div className="carousel">
            {certificates.map(certificate => (
                <p>{certificate.id}</p>
            ))}
        </div>
    )
}