// action constants
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const VISION_ALL = 'VISION_ALL'
export const VISION_COMPLATE = 'VISION_COMPLATE'
export const VISION_NOT_COMPLATE = 'VISION_NOT_COMPLATE'

// action creator

// todos controller
export const addTodo = (todo) => { return {type: ADD_TODO, todo} }
export const toggleTodo = (id) => { return {type: TOGGLE_TODO, id} }
export const removeTodo = (id) => { return {type: REMOVE_TODO, id} }
// vision controller
export const visionAll = () => {return {type: VISION_ALL}}
export const visionComplate = () => {return {type: VISION_COMPLATE}}
export const visionNotComlate = () => {return {type: VISION_NOT_COMPLATE}}