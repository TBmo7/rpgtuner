import React, {useState,useEffect} from 'react';
import './simholder.css'
import {connect} from 'react-redux'
import {fetchData} from '../actions/app'
import {useSelector, useDispatch} from "react-redux"





const SimHolder = React.memo(charInfo =>{

    const [results, setResults] = useState({
        charVictories: null,
        diceRolls:null,
        avgDmgPerRound:null,
        avgDmgSoakedPerRound:null,
        criticalHits:null,
        criticalFails:null,
        avgHit:null,
        avgRoundsPerCombat:null,
        charDodge: null,
        charParry: null,
        enemyDodge: null,
        enemyParry: null
    })
    
    const tester = useSelector(state => state.charInfo)
    console.log(tester)
    let sampleCharBlock = {
        meleeStrike: 5,
        armor: 3,
        health: 15,
        dodge:10,
        parry:5,
        dmg:3
    }
    
    let sampleOppBlock = {
        meleeStrike: 5,
        armor: 2,
        health:13,
        dodge:7,
        parry:5,
        dmg:3
    }
    
    
    //console.log(results)
    
    
    const RunSim = (charBlock,opponentBlock) => {
        let victories = 0;
        let dicerolls = 0;
        let rounds = 0;
        let damage = 0;
        let fails = 0;
        let hits = 0;
        let attacks = 0;
        let misses = 0;
        let chardmgsoak = 0;
        let maxCharHealth = charBlock.health
        let maxOppHealth = opponentBlock.health
        let enemydodge = 0;
        let enemyparry = 0;
        let chardodge = 0;
        let charparry = 0;
        /**
         * Need to keep track of both health pools,
         * A round will be an attack roll, against dodge
         * If successful, calculate damage against armor
         *  subtract damage,
         * continue with opponent
         *  continue until someone is dead.
         *  total up the number of rounds, the number of character dice rolls
         *  calculate the total damage
         * once finished running, calculate hit % and DPR 
         */
            console.log(results)
            console.log(charBlock)
            console.log("CHAR HP", maxCharHealth)
            console.log("OPP HP", maxOppHealth)
        while (maxOppHealth > 0 && maxCharHealth > 0){
                rounds ++;
                let charatkdamage = 0;
                let enemyatkdamage = 0;
            if (charBlock.meleeStrike >= Math.floor(Math.random()*100)){
                console.log("COMBAT RAN")
                dicerolls ++;
                hits ++;
                attacks ++;
                if (opponentBlock.dodge > opponentBlock.parry){
                    //Check if dodge
                    if(opponentBlock.dodge >= Math.floor(Math.random()*100)){
                        //they dodge
                        enemydodge ++;
                    }
                    else{
                        //we damage
                        for(let i = 0; i<3; i++)
                            {
                            charatkdamage += Math.floor(Math.random()*6)
                            }                        
                        maxOppHealth -= charatkdamage - opponentBlock.armor;
                        
                        damage += charatkdamage;
                        }
                
                }
                else {
                    //opponent parry
                    if(opponentBlock.parry >= Math.floor(Math.random()*100)){
                        //they parry
                        enemyparry ++;
                    }
                    else{
                        //we damage
                        for(let i = 0; i<3; i++)
                            {
                            charatkdamage += Math.floor(Math.random()*6)
                            }                        
                        maxOppHealth -= charatkdamage - opponentBlock.armor;
                        damage += charatkdamage;
                        
                        }
                }
                
                
            }
            else {
                misses ++;
            }


            if(opponentBlock.meleeStrike > Math.floor(Math.random()*100)){
                dicerolls ++;
                //hits, roll to dodge/parry
                if(charBlock.parry > charBlock.dodge){
                    //we attempt parry
                    if(charBlock.parry >= Math.floor(Math.random()*100)){
                        charparry ++
                    }
                    else{
                    //they damage
                    for(let i = 0; i<3; i++){
                        enemyatkdamage += Math.floor(Math.random()*6)
                        maxCharHealth -= enemyatkdamage - charBlock.armor
                    }
                }
                }
                else{
                    //we attempt dodge
                    if(charBlock.dodge >= Math.floor(Math.random()*100)){
                        chardodge ++;
                    }
                    else{
                        for(let i = 0; i<3; i++){
                            enemyatkdamage += Math.floor(Math.random()*6)
                            maxCharHealth -= enemyatkdamage - charBlock.armor
                        }
                    }
                }
                
            }

        }
        if(maxCharHealth > 0 && maxOppHealth <= 0){
            victories ++;
        }
        if(maxOppHealth > 0 && maxCharHealth <= 0){
            fails ++;
        }
        
        
        setResults(state=>({
            ...state,
            charVictories:victories,
            diceRolls:dicerolls,
            avgDmgPerRound: (damage/rounds),
            avgHit: (hits/rounds) * 100,
            avgRoundsPerCombat: rounds,
            charDodge: chardodge,
            charParry: charparry,
            enemyDodge: enemydodge,
            enemyParry: enemyparry
        }))

        
        
        console.log('sim ran')
        console.log(damage)
        console.log(results)
        
        
    }

    useEffect(()=>{},[results])

return(
    <div className = 'sim-holder'>
        <button 
        className = 'sim-button'
        onClick = {()=>RunSim(sampleCharBlock,sampleOppBlock)}
        > Run Simulation</button>
        <div className = "stats-block">
             <div className = "stats-left">
                 <ul className = "stats-left-list">
                     <li>
                         Character Victories: {results.charVictories}
                     </li>
                     <li>
                         Dice Rolls : {results.diceRolls}
                     </li>
                     <li>
                         Avg Damage Per round: {results.avgDmgPerRound}
                     </li>
                     <li>
                         Avg Damage Soaked per round:
                     </li>
                     <li>
                         Character Dodges : {results.charDodge}
                     </li>
                     <li>
                         Character Parries : {results. charParry}
                     </li>
                 </ul>
                 </div>
             <div className = "stats-right">
                 <ul className = "stats-right-list">
                    <li>
                        Critical hits :
                    </li>
                    <li>
                        Critical fails :
                    </li>
                    <li>
                        Avg hit % : {results.avgHit}
                    </li>
                    <li>
                        Avg rounds per combat : {results.avgRoundsPerCombat}
                    </li>
                    <li>
                        Enemy Dodges : {results.enemyDodge}
                    </li>
                    <li>
                        Enemy Parries : {results.enemyParry}
                    </li>
                 </ul>
                 </div>   

        </div>
        
    </div>
)
})

const mapStateToProps = state => {
    return {
        
        
    }
}

export default connect(
    mapStateToProps,
    {fetchData}
)(SimHolder)

