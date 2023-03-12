import {cardArray} from "../data/CardArray"
import Image, { useEffect } from "react"

export type Cart = {
    bg:string
}

const Board = ({cardChosen}) => {
    

        const randomBoard =  cardArray.sort(() => 0.5 - Math.random());
        const pageContent = randomBoard.map(image => (
            <div key={image.id}>
                <p>{image.name}</p>
                <img src={image.img} width={100}></img>
            </div>
        ))
        const content = (
            <div>
                {pageContent}
            </div>
        )
        
        return content
    }



export default Board