import React from 'react';
import Row from './Components/Row';
import shortid from 'shortid';
import supportingIcon from './Components/supportinglocal.svg';
import amigoMatching from './Components/amigosonwheelchair.svg';
import safetyGuy from './Components/guysitting.svg'

const AboutRowContent = [
    {
        id: shortid.generate(),
        rowHeading: "1. Our Matching System",
        rowParagraph:
            "Our interest - based matching system will make tailored connections between users and help people match with individuals who share similar interests, enhancing the chances of meaningful relationship building.",
        rowImage: amigoMatching,
        rowOrder: 2
    },
    {
        id: shortid.generate(),
        rowHeading: "2. Our local-venue network",
        rowParagraph: "Through our exclusive partnerships with local businesses our users will be able to benefit from our established V\&M venue network, through which they will get exclusive discounts and in -app deals during their dates.Allowing us to not only provide interest - based venue alignment for our users but to also play our role as a sustainable dating app in supporting the local community.",
        rowImage: supportingIcon,
        rowOrder: 1
    },
    {
        id: shortid.generate(),
        rowHeading: "3. Our safety assurance policy",
        rowParagraph: "Our AI verification system ensures all users on our platform are authentic, and our innovative emergency alert system ensures our users peace of mind on their dates to feel safe and secure.",
        rowImage: safetyGuy,
        rowOrder: 2
    }
];

const AboutRows = () => {
    return (
        <>
            {AboutRowContent.map(rowContent => {
                return (
                    <Row
                        key={rowContent.id}
                        rowHeading={rowContent.rowHeading}
                        rowParagraph={rowContent.rowParagraph}
                        rowImage={rowContent.rowImage}
                        rowOrder={rowContent.rowOrder}
                    />
                )
            })}
        </>
    );
}

export default AboutRows;