import React from "react"
import data from "./SheCodesData"

import { CertContainer, CertWrapper, CertHeading, CertTitle, CertCard, CertInfo, CertButton, CertImage} from "./SheCodesElements"

const SheCodes = () => {
    return (
        <CertContainer>
            <CertHeading><h1>Certifications</h1></CertHeading>
            <CertWrapper>
                {
               data.map(({id, img, alt, name, button, link}) => {
                    return(
                        <CertCard key={id}>
                            <CertImage src={img} alt={alt} />
                            <CertInfo>
                                <CertTitle>{name}</CertTitle>
                                <a href={link} target='_blank'> 
                                <CertButton>{button}</CertButton>
                                </a>
                            </CertInfo>
                        </CertCard>
                    )
                })} 
            </CertWrapper>
        </CertContainer>
    )
}
export default SheCodes
