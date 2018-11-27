import React, { Component } from 'react';
import "./Technologie.scss";

const text = "The entire starfleet couldn't destroy the whole planet. It'd take a thousand ships with more fire power than I've... There's another ship coming in. Maybe they know what happened. It's an Imperial fighter. It followed us! No. It's a short range fighter. There aren't any bases around here. Where did it come from? It sure is leaving in a big hurry. If they identify us, we're in big trouble. Not if I can help it. Chewie...jam it's transmissions. It'd be as well to let it go. It's too far out of range. Not for long...He is here... Obi-Wan Kenobi! What makes you think so? A tremor in the Force. The last time I felt it was in the presence of my old master. Surely he must be dead by now. Don't underestimate the power of the Force. The Jedi are extinct, their fire has gone out of the universe. You, my friend, are all that's left of their religion. Yes. Governor Tarkin, we have an emergency alert in detention block A A-twenty-three. The princess! Put all sections on alert!"

export default class Technologie extends Component {
  render() {
    return (
      <div className="technologie_container">
        <div className="technologie-firstpart">
         <h1>Technologie</h1>
         <p>La solution numérique développée par Walkoo se compose d’une plateforme personnalisée que vous administrez à partir de comptes dédiés et d’une application mobile spécialement désignée, téléchargeable sur smartphone.</p>
        </div>
        <h3>Les avantages de la solution Walkoo</h3>
        <div className="technologie-secondpart">
         <div className="grid_container_avantage">
          <div className="avantage avantage1">
            <div className='title1'>
              <img src={require('./link.png')}/>
              <h6>Lien direct avec <br/>
              votre audience</h6>
            </div>
            <p className='text1'>{text}</p>
          </div>
          <div className="avantage avantage2">
            <div className='title2'>
              <img src={require('./notification.png')}/>
              <h6>Contextualisation <br/>
              des notifications</h6>
            </div>            
            <p className='text2'>{text}</p>
          </div>
          <div className="avantage avantage1">
            <div className='title1'>
              <img src={require('./ux.png')}/>
              <h6>Ux <br/>
                Design</h6>
            </div>
            <p className='text1'>{text}</p>
          </div>
          <div className="avantage avantage2">
            <div className='title2'>
              <img src={require('./performance.png')}/>
              <h6>Notre <br/>
                Efficacité</h6>
            </div>
            <p className='text2'>{text}</p>
          </div>
         </div>
        </div>
      </div>
    )
  }
}