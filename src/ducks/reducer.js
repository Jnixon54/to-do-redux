const initialState = {
  userInput: '',
  activeFilter: 'ALL',
  tasks: [],
  taskID: 0

}
// Action type
const UPDATE_INPUT = 'UPDATE_INPUT';
const SET_FILTER = 'SET_FILTER';
const TOGGLE_CHECK = 'TOGGLE_CHECK';
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK'

// Reducer
function reducer(state = initialState, action){
  console.log('ACTION RECEIVED: ', action)
  console.log('STATE: ', state);
  switch(action.type){
    case UPDATE_INPUT:
      return {...state, userInput: action.userInput}
    case SET_FILTER:
      return {...state, activeFilter: action.activeFilter}
    case TOGGLE_CHECK:
      return {...state, tasks: state.tasks.map(task => (task.id === action.id) ? {...task, completed: !task.completed} : task)}
    case ADD_TASK:
      if (state.userInput.length > 0){
        return {...state, tasks: [...state.tasks, 
                          {text: state.userInput, id: state.taskID + 1, completed: false}], 
                          taskID: state.taskID + 1}        
      } else {
        return {...state}
      }
    case REMOVE_TASK:
      return {...state, tasks: state.tasks.filter(item => item.id !== action.id)} 
    default: return state;
  }
}

// Actions
export function updateInput(userInput) {
  return {
    type: UPDATE_INPUT,
    userInput
  }
}

export function setFilter(activeFilter){
  return {
    type: SET_FILTER,
    activeFilter
  }
}

export function toggleCheck(id){
  return {
    type: TOGGLE_CHECK,
    id
  }
}

export function addTask(){
  return {
    type: ADD_TASK
  }
}

export function removeTask(id){
  return {
    type: REMOVE_TASK,
    id
  }
}

export default reducer;