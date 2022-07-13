import {VISION_ALL, VISION_COMPLATE, VISION_NOT_COMPLATE } from "../action"

const initTodo = {
    vision: "VISION_ALL"
}

export const VisionTodo = (state = initTodo, action) => {
    switch(action.type) {
        case VISION_ALL:
            return {...state, vision: "VISION_ALL"}
        case VISION_COMPLATE:
            return {...state, vision: "VISION_COMPLATE"}
        case VISION_NOT_COMPLATE:
            return {...state, vision: "VISION_NOT_COMPLATE"}
        default:
            return state
    }
}