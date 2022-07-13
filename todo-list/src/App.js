import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { TodoForm } from "./components/TodoForm/TodoForm";

import "./App.css"

export const App = () => {
    return (
        <div className="app">
            <Header/>
            <TodoForm/>
            <Footer/>
        </div>
    )
}