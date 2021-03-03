import React, {useState,useEffect} from 'react';
import './simholder.css'








const SimHolder = React.memo(props =>{

    const [results, setResults] = useState({
        charVictories: null,
        diceRolls:null,
        avgDmgPerRound:null,
        avgDmgSoakedPerRound:null,
        criticalHits:null,
        criticalFails:null,
        avgHit:null,
        avgRoundsPerCombat:null
    })
    
    let sampleCharBlock = {
        meleeStrike: 5,
        armor: 3,
        health: 15,
        dodge:10,
        dmg:3
    }
    
    let sampleOppBlock = {
        meleeStrike: 5,
        armor: 2,
        health:13,
        dodge:7,
        dmg:3
    }
    
    
    console.log(results)
    const RunSim = (charBlock,opponentBlock) => {
        let victories = 0;
        let dicerolls = 0;
        let rounds = 0;
        let damage = 0;
        let fails = 0;
        let hits = 0;
        let attacks = 0;
        let misses = 0;
        let maxCharHealth = charBlock.health
        let maxOppHealth = opponentBlock.health
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
            if (charBlock.meleeStrike > Math.floor(Math.random()*10)){
                console.log("COMBAT RAN")
                dicerolls ++;
                hits ++;
                attacks ++;
                maxOppHealth -= charBlock.meleeStrike - opponentBlock.armor;
                damage += charBlock.meleeStrike;
                
            }
            else {
                misses ++;
            }


            if(opponentBlock.meleeStrike > Math.floor(Math.random()*10)){
                dicerolls ++;
                maxCharHealth -= opponentBlock.meleeStrike - charBlock.armor
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
            avgRoundsPerCombat: rounds
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
                 </ul>
                 </div>   

        </div>
        
    </div>
)
})

export default SimHolder