import {FETCH_DATA, DATA_SUCCESS, DATA_ERROR, DATA_UPDATE} from "../actions/app"

const initialCharState = {

    charInfo: {
        
            title: "Rico",
            race: "Human",
            strength: 12,
            dexterity: 18,
            endurance: 12,
            intelligence:11,
            wits: 20,
            willpower: 4,
            presence: 5,
            speed: 10,
            armorPoints: 0,
            armorRating: 0,
            mana: 10
        
        

    },
    oppInfo: {
            title: "Evil Rico",
            race: "Human",
            strength: 12,
            dexterity: 18,
            endurance: 12,
            intelligence:11,
            wits: 20,
            willpower: 4,
            presence: 5,
            speed: 10,
            armorPoints: 0,
            armorRating: 0,
            mana: 10
    },
    isLoading: false,
    error: "",
    showInfo: false
}

const initialStatsAndSkillsState = {
    message: "message"
}

export const rootReducer = (state = {initialCharState, initialStatsAndSkillsState}, action) => {
    switch(action.type){
        case FETCH_DATA:
            console.log("FETCH DATA RUNS")
            return{
                ...state.initialCharState,
                isLoading:true
            };
        case DATA_SUCCESS:
            console.log("DATA SUCCESS")
            return{
                ...state.initialCharState,
                isLoading:false,
                error:"",
                showInfo:true
            }
        case DATA_ERROR:
            console.log("DATA ERROR")
            return{
                ...state.initialCharState,
                isLoading:false
            }
        case DATA_UPDATE:
            console.log("DATA UPDATE")
            return{
                state,
                error:"This is a test of the REducer system, this is only a test"


            }
        default:
            return state.initialCharState
    }   

}

/**
 * Able to hand out this state, need a way to update this state
 * 
 */