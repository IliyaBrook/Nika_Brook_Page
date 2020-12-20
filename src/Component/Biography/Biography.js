import React,{Fragment} from "react";
import './Biography.css'
import Image from "react-bootstrap/Image";


export default function Biography () {
    return(
        <Fragment>
            <div className="borderMainBiography">
                <span className="biographyText">BIOGRAPHY</span>
                <div className="transparentContentBorder">
                    <p className="header_p">
                        <h3>Veronika Brook</h3>
                        Soprano
                    </p>
                    <div className="bodyBiographyText">
                        <p>
                            Veronika Brook began her 2019/2020
                            season as an alumnus of Meitar Young
                            Artist Program of The Israeli Opera
                            in Tel-Aviv.
                        </p>
                        <p>
                            During the first quarter of 2020 Ms
                            Brook was a soloist in the concert
                            series organized by The Israel Camerata
                            Jerusalem Orchestra under
                            the patronage of Maestro Avner Biron.
                        </p>
                        <p>
                            In December 2019 Veronika Brook took part in The Gala Concert of The World Opera Stars of
                            The 10th Minsk International
                            Christmas Opera Forum in
                            Belarus where she worked
                            with Maestro Gianluca Marciano.
                        </p>
                        <p>
                            Her constant opera studio works include the roles of The Queen of the Night (Die
                            Zauberflöte, Mozart), Clorinda
                            (La Cenerentola, Rossini)
                            and The Sand and Dew Fairies
                            (Hänsel und Gretel, Humperdinck).
                        </p>
                        <p>
                            The mainstage and studio work in The
                            Israeli Opera included singing Sophie in
                            Werther by Massenet, Amina in La
                            sonnambula by Bellini, Sandrina in
                            La finta giardiniera by Mozart,
                            Yvette in The Passenger by
                            Weinberg and The God in The Mothers by Sebba.
                        </p>
                        <p>
                            In summer 2018 Veronika made her debut as Violetta in La Traviata by
                            Verdi with the Jerusalem Summer
                            Festival and The Jerusalem Orchestra
                            (conductor - Maestro Patrick Baton).
                        </p>
                        <p>
                            In 2017/2018 Ms Brook performed
                            such roles as Barbarina
                            (Le nozze di Figaro, Mozart)
                            with The Israeli Sinfonietta
                            Beer Sheva and Servilia (La clemenza di Tito, Mozart)
                            in the Meitar Opera Studio production.
                        </p>
                        <p>
                            A young coloratura soprano graduated from Ukrainian
                            National Academy of Music
                            and Culture (class of Vera
                            Andriyanenko and Valery Trubin-Leonoff)
                            and got her Master degree in opera
                            singing in 2012. While studying at
                            the academy she performed the roles
                            of The Queen of the Night
                            (Die Zauberflöte, Mozart),
                            Rosita (Un mari à la porte,
                            Offenbach), Suor Genovieffa
                            (Suor Angelica, Puccini) and The Queen of
                            Shemakha (The Golden Cockerel,
                            Rimsky-Korsakov) in the opera studio productions.
                        </p>
                        <p>
                            After graduating Ms Brook has become a resident artist of The
                            Dnepropetrovsk State Academic
                            Theatre of Opera and Ballet
                            (Ukraine) where she has performed such
                            roles as Frasquita (Carmen, Bizet),
                            Olympia (Les Contes d'Hoffmann, Offenbach)
                            and The SwanBird (The Tale of Tsar Saltan,
                            Rimsky-Korsakov). Her career has reached a
                            new level after moving to Israel.
                        </p>
                        <p>
                            She has received awards from such vocal contests as Jerusalem International Opera
                            Competition 2018 (1st prize), Nuovo Canto 2018 (3rd prize), Competizione dell’Opera 2019
                            (finalist and special prize), The Hans Gabor Belvedere Singing Competition 2018
                            (semifinalist), Boris Hmyria International Opera Competition
                            (special prize), “The
                            Brilliant Voice of
                            Ukraine” National Competition (winner) and other.
                        </p>
                    </div>
                </div>
                <div className="BiographyBorder">


                </div>
            </div>
            <Image src="./image/large/2.jpg" fluid/>
        </Fragment>
    )
}
