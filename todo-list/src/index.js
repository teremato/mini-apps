import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

import { App } from "./App";

const user = {
    name: "anton"
}

const POSTS = [
    {id: 1, name: "evgeniy", text: "hi"},
    {id: 2, name: "anton", text: "bye"}
]


const Hello = ({posts, user}) => {
    const [text, setText] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        const post = {
            id: posts.length + 1,
            name: user.name,
            text: text
        }

        posts.push(post)
        setText("")

        console.log(posts)

    }
    const handleChange = (event) => {setText(event.target.value)}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>Add New Task</div>
                <input onChange={handleChange} placeholder="add..." value={text}/>
                <button>ADD</button>
            </form>
            <List posts={posts}/>
        </div>
    )
}

const List = ({posts}) => {
    return (
        <div>
            <div>List.Array</div>
            <div>
                {
                    posts.map((item) => {
                        return (
                            <div key={item.id}>
                                <div>{item.name}</div>
                                <div>{item.text}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <App/>, 
);