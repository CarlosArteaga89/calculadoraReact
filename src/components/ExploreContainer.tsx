import './ExploreContainer.css';
import {IonButton, IonIcon, IonContent, IonInput} from '@ionic/react';
import React, {useState} from "react";

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
        const [result, setResult] = useState("");
        const numero = (e: any) => {
            setResult(result.concat(e.target.name))
        }
        const limpiar = () => {
            setResult("")
        }
        const borrar = () => {
            setResult(result.slice(0, result.length - 1))
        }
        const igual = () => {
            try {
                setResult(eval(result))
            } catch (err) {
                setResult("Math Error")
            }
        }

          return (
              <IonContent>
                  <form>
                      <input type="text" value={result}/>
                  </form>
                  <div className="keypad">
                      <button onClick={limpiar} id="clear" color="secondary">CLEAR</button>
                      <button onClick={borrar} id="borrar" color="secondary">C</button>
                      <button name="/" onClick={numero} id="button">/</button>
                      <button name="7" onClick={numero} id="button">7</button>
                      <button name="8" onClick={numero} id="button">8</button>
                      <button name="9" onClick={numero} id="button">9</button>
                      <button name="+" onClick={numero} id="button">+</button>
                      <button name="4" onClick={numero} id="button">4</button>
                      <button name="5" onClick={numero} id="button">5</button>
                      <button name="6" onClick={numero} id="button">6</button>
                      <button name="-" onClick={numero} id="button">-</button>
                      <button name="1" onClick={numero} id="button">1</button>
                      <button name="2" onClick={numero} id="button">2</button>
                      <button name="3" onClick={numero} id="button">3</button>
                      <button name="*" onClick={numero} id="button">*</button>
                      <button name="0" onClick={numero} id="button">0</button>
                      <button name="." onClick={numero} id="button">.</button>
                      <button id="igual" onClick={igual} >=</button>
                  </div>
              </IonContent>
          );
};

export default ExploreContainer;
