"use client"
import styles from './card.module.css';

export default function InteractiveCard({
    children,
    contentName
}:{children:React.ReactNode, contentName:string}){

    function onCardSelected(){
        alert("You Select " + contentName)
    }

    function onCardMouseAction(event:React.SyntheticEvent){
        const card = event.currentTarget

        if(event.type === "mouseover"){
            card.classList.remove("shadow-lg","bg-white")
            card.classList.add("shadow-2xl","bg-neutral-200")
        }
        else{
            card.classList.remove("shadow-2xl","bg-neutral-200")
            card.classList.add("shadow-lg","bg-white")
        }
    }

    return (
        <div
            className={`${styles.card} shadow-lg rounded-lg bg-white w-full`}
            onClick={onCardSelected}
            onMouseOver={onCardMouseAction}
            onMouseOut={onCardMouseAction}
        >
            {children}
        </div>
    )
}