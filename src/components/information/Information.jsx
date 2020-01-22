import React from 'react';
import Button from '../reusables/CallToActionButton';
import './information.scss';

const Information= () => {
    return (
        <div className="info">
            <div className="wrapper">
                <h3>Hur en hyr och vad det kostar</h3>
                <h4>Kostnad</h4>
                <p>
                    Startavgift: 500 kr, Hyra av saker ingår i det beloppet. Moms tillkommer med 25%
                    Hyres-summa vecka 1: 100 %. Ex. : 1000 kr
                    Vecka 2 : 50 % av beloppet. 500 kr
                    Vecka 3 och framåt: 25 % av beloppet. 250 kr
                    totalbelopp för 3 veckor 1750 kr
                </p>
                <p>
                Utöver de tillkommer en uppackningsavgift på 300 kr/timmen, vid liten uthyrning räcker de oftast med en timmes uppackning.
                Om man har sönder eller inte returnerar en vara utgår en ersättningskostnad.
                I regel kostar epok eller specialrekvisita dubbelt så mycket som vanlig rekvisita. Tex: vanlig tallrik 5 kr och epoktallrik 10 kr
                </p>
                <h4>När en hyr</h4>
                <p>
                    Skriv ett kontrakt med den SC-personal som låser upp, finns vid skrivbordet. Fota av kontraktet med vår smartphone som ligger vid datorn.
                    Plocka den rekvisita som ska hyras. Fota av föremålen.
                    Packa rekvisitan. 
                </p>
                <h4>Göra en deal med fast pris</h4>
                <p>
                    Då ingår egen nyckel, 1 st under hela produktionen. Fler nycklar kan lånas tillfälligt om det finns behov. Förutsätter att det finns kopior att låna ut.
                    Fri tillgång till förrådet när det passar er produktion. Ni ansvarar för att larma och låsa efter er. Priset bestäms efter storlek på produktion och hur länge den pågår.
                    Vissa uppackningstimmar ingår i en paketdeal (Varierande beroende på vilken paketdeal man gör).
                </p>
                <h4>Framplockningsavgift</h4>
                <p>
                    500 kr/timmen
                    Det innefattar konsultation och packning. Att SC väljer ut och packar rekvisitan som ska användas i produktionen.
                    Glöm inte att ange på fakturaunderlaget vem/vilka på Sakcenter som har utfört jobbet.  
                </p>
                <Button buttonText={'Till galleriet'} />
            </div>
        </div>
    )
}
export default Information;