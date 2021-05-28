import React, {useState,useEffect} from 'react';
import {connect,useDispatch} from 'react-redux'

import {fetchData, FETCH_DATA} from '../actions/app'
import { rootReducer } from '../reducers/app';
import './characterForm.css'

const CharacterForm = React.memo(props =>{
    const dispatch = useDispatch()
    
    const [enteredStats, setEnteredStats] = useState({
            title: props.charInfo.title ,
            race: props.charInfo.race,
            strength: props.charInfo.strength,
            dexterity: props.charInfo.dexterity,
            endurance: props.charInfo.endurance,
            intelligence:props.charInfo.intelligence,
            wits: props.charInfo.wits,
            willpower: props.charInfo.willpower,
            presence: props.charInfo.presence,
            speed: props.charInfo.speed,
            armorPoints: props.charInfo.armorPoints,
            armorRating: props.charInfo.armorRating,
            mana:props.charInfo.mana 
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
        setEnteredInnateSkills(state=>({
            ...state,
            perception: parseInt(enteredStats.intelligence) + parseInt(enteredStats.willpower) ,
            sneak: parseInt(enteredStats.dexterity) + parseInt(enteredStats.willpower) ,
            generalKnowledge: enteredStats.intelligence ,
            basicAthletics: parseInt(enteredStats.strength) + parseInt(enteredStats.dexterity) ,
            insight: parseInt(enteredStats.presence) + parseInt(enteredStats.wits) ,
            deception: parseInt(enteredStats.intelligence) + parseInt(enteredStats.wits) ,
            persuasion: parseInt(enteredStats.presence) + parseInt(enteredStats.willpower) ,
            intimidation: parseInt(enteredStats.presence) + parseInt(enteredStats.strength)
        }))
        //WORKING RIGHT HERE 5/2/2021
        //const store = props.charInfo
        
        
        
    },[enteredStats])

    

    console.log("PROPS " + props)
    //console.log("Char info Props"  + props.charInfo.title)

    //console.log(enteredPhysicalStats)
    return(
        <section className = "character-form">
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
                        <ul className = "innate-skills-list">
                            <li>
                                Perception {enteredInnateSkills.perception}
                            </li>
                            <li>
                                Sneak {enteredInnateSkills.sneak}
                            </li>
                            <li>
                                General Knowledge {enteredInnateSkills.generalKnowledge}
                            </li>
                            <li>
                                Basic Athletics {enteredInnateSkills.basicAthletics}
                            </li>
                            <li>
                                Insight {enteredInnateSkills.insight}
                            </li>
                            <li>
                                Deception {enteredInnateSkills.deception}
                            </li>
                            <li>
                                Persuasion {enteredInnateSkills.persuasion}
                            </li>
                            <li>
                                Intimidation {enteredInnateSkills.intimidation}
                            </li>
                        </ul>
                    </div>
                    <div className = "saves">

                    </div>
        
        </section>            

        </section>
    )


})

const mapStateToProps = state => {
    return {
        charInfo: state.charInfo,
        testPerception : state.enteredInnateSkills,
        isLoading: state.isLoading,
        error: state.error,
        showInfo: state.showInfo
    }
}

export default connect(
    mapStateToProps,
    {fetchData}
)(CharacterForm)