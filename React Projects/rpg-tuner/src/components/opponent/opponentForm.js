import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchData} from "../actions/app"
import './opponentForm.css'

const OpponentForm = React.memo(props =>{
    const [enteredStats, setEnteredStats] = useState({
            title: props.oppInfo.title,
            race: props.oppInfo.race,
            strength: props.oppInfo.strength,
            dexterity: props.oppInfo.dexterity,
            endurance: props.oppInfo.endurance,
            intelligence: props.oppInfo.intelligence,
            wits: props.oppInfo.wits,
            willpower: props.oppInfo.willpower,
            presence: props.oppInfo.presence,
            speed: props.oppInfo.speed,
            armorPoints: props.oppInfo.armorPoints,
            armorRating: props.oppInfo.armorRating,
            mana: props.oppInfo.mana
        })
    const [enteredPhysicalStats,setEnteredPhysicalStats] = useState({
            hpLight: enteredStats.endurance + enteredStats.wits,    
            initiative:enteredStats.dexterity + enteredStats.wits,
            strikeMelee:enteredStats.strength + enteredStats.dexterity ,
            strikeRange: enteredStats.strength + enteredStats.dexterity,
            parry: enteredStats.strength + enteredStats.wits,
            dodge: enteredStats.dexterity + enteredStats.wits,
            dashDistance: Math.ceil(enteredStats.speed/2),
            carryWeight: enteredStats.strength*5 ,
            liftDragWeight: enteredStats.strength*10,
            bonusMeleeDamage: enteredStats.strength
    })
    const [enteredInnateSkills,setEnteredInnateSkills] = useState({
            perception:enteredStats.intelligence + enteredStats.willpower ,
            sneak: enteredStats.dexterity + enteredStats.willpower ,
            generalKnowledge: enteredStats.intelligence ,
            basicAthletics: enteredStats.strength + enteredStats.dexterity ,
            insight: enteredStats.presence + enteredStats.wits ,
            deception: enteredStats.intelligence + enteredStats.wits ,
            persuasion: enteredStats.presence + enteredStats.willpower ,
            intimidation: enteredStats.presence + enteredStats.strength
    })
    const [enteredSaves, setEnteredSaves] = useState({
            vsPoisonDisease : enteredStats.strength + enteredStats.endurance ,
            csComaDeath: enteredStats.endurance + enteredStats.willpower ,
            vsIllusions: enteredStats.intelligence + enteredStats.willpower ,
            vsMindControl: enteredStats.intelligence + enteredStats.willpower ,
            vsInsanity: enteredStats.wits + enteredStats.willpower
    })
       


    const submitHandler = event => {
        event.preventDefault();
        
    }

    

    
    useEffect(()=>{
        setEnteredPhysicalStats(state=>({
            ...state,
            hpLight: parseInt(enteredStats.endurance) + parseInt(enteredStats.wits),    
            initiative:parseInt(enteredStats.dexterity) + parseInt(enteredStats.wits),
            strikeMelee:parseInt(enteredStats.strength) + parseInt(enteredStats.dexterity) ,
            strikeRange: parseInt(enteredStats.strength) + parseInt(enteredStats.dexterity),
            parry: parseInt(enteredStats.strength) + parseInt(enteredStats.wits),
            dodge: parseInt(enteredStats.dexterity) + parseInt(enteredStats.wits),
            dashDistance: Math.ceil(enteredStats.speed/2),
            carryWeight: enteredStats.strength*5 ,
            liftDragWeight: enteredStats.strength*10,
            bonusMeleeDamage: enteredStats.strength
        }))
    },[enteredStats])

    //console.log(enteredPhysicalStats)
    //console.log("PROPS " + props.oppInfo.title)
    return(
        <section className = "opponent-form">
            <form onSubmit ={submitHandler}>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Name</label>
                    <input
                    type = 'text'
                    id = 'title'
                    value = {enteredStats.title}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               title: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Race</label>
                    <input
                    type = 'text'
                    id = 'race'
                    value = {enteredStats.race}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               race: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Strength</label>
                    <input
                    type = 'number'
                    id = 'strength'
                    value = {enteredStats.strength}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               strength: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Dexterity</label>
                    <input
                    type = 'number'
                    id = 'dexterity'
                    value = {enteredStats.dexterity}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               dexterity: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Endurance</label>
                    <input
                    type = 'number'
                    id = 'endurance'
                    value = {enteredStats.endurance}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               endurance: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Intelligence</label>
                    <input
                    type = 'number'
                    id = 'intelligence'
                    value = {enteredStats.intelligence}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               intelligence: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Wits</label>
                    <input
                    type = 'number'
                    id = 'wits'
                    value = {enteredStats.wits}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               wits: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Willpower</label>
                    <input
                    type = 'number'
                    id = 'willpower'
                    value = {enteredStats.willpower}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               willpower: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Presence</label>
                    <input
                    type = 'number'
                    id = 'presence'
                    value = {enteredStats.presence}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               presence: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Speed</label>
                    <input
                    type = 'number'
                    id = 'speed'
                    value = {enteredStats.speed}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               speed: event.target.value 
                        }))
                    }}
                    />
                </div>
                
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Armor Points</label>
                    <input
                    type = 'number'
                    id = 'armorPoints'
                    value = {enteredStats.armorPoints}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               armorPoints: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Armor Rating</label>
                    <input
                    type = 'number'
                    id = 'armorRating'
                    value = {enteredStats.armorRating}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               armorRating: event.target.value 
                        }))
                    }}
                    />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'title'>Mana</label>
                    <input
                    type = 'number'
                    id = 'mana'
                    value = {enteredStats.mana}
                    onChange = {event => {
                        setEnteredStats((enteredStats)=>({
                            ...enteredStats,
                               mana: event.target.value 
                        }))
                    }}
                    />
                </div>
            </form>

        <section className = 'skills-section'>
                    <div className = "physical-stats">
                        <ul className = "physical-stats-list">
                            <li>
                                Health Points  {enteredPhysicalStats.hpLight}
                            </li>
                            <li>
                                Initiative {enteredPhysicalStats.initiative}
                            </li>
                            <li>
                                Melee Strike {enteredPhysicalStats.strikeMelee}
                            </li>
                            <li>
                                Ranged Strike {enteredPhysicalStats.strikeRange}
                            </li>
                            <li>
                                Parry {enteredPhysicalStats.parry}
                            </li>
                            <li>
                                Dodge {enteredPhysicalStats.dodge}
                            </li>
                            <li>
                                Dash Distance {enteredPhysicalStats.dashDistance} yards
                            </li>
                            <li>
                                Carry Weight {enteredPhysicalStats.carryWeight} pounds
                            </li>
                            <li>
                                Lift/Drag Weight {enteredPhysicalStats.liftDragWeight} pounds
                            </li>
                            <li>
                                Bonus Melee Damage {enteredPhysicalStats.bonusMeleeDamage}
                            </li>
                        </ul>
                    </div>
                    <div className = "innate-skills">

                    </div>
                    <div className = "saves">

                    </div>
        
        </section>            

        </section>
    )


} )

const mapStateToProps = state => {
    return {
        oppInfo: state.oppInfo,
        isLoading: state.isLoading,
        error: state.error,
        showInfo: state.showInfo
    }
}

export default connect(
    mapStateToProps,
    {fetchData}
)(OpponentForm)