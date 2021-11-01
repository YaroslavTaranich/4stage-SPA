import { Component } from "react";

export default class ListItemsToPages extends Component {

    renderPageItems = (itemsAPI) => {
        return(
            itemsAPI.map((item, j) => {
                let key = 'page-item' + j;
                return (
                    <div key={key} className="item__wrapper">
                        <div className='img-wrapper'>
                            <img src={item.imgURL} alt={item.title}></img>
                        </div>
                        <div className="item__text">
                            <h3>{item.title}</h3>
                            {this.renderUlLiItems(item, j)}
                            <p>{item.discription}</p>
                            <div 
                            className="item__text-button"
                            onClick={() => {this.props.showOrderModal(item)}}
                            >Заказать</div>
                        </div>
                    </div>
                )
            })
        )

    }

    renderUlLiItems = (item, j) => {
        if (item.setup) {
            return(
                <>
                <p>{item.listTitle}</p>
                <ul>
                    {item.setup.map((line, i) => {
                        let likey = 'list-item' + j + i;
                        return(
                            <li key={likey}>{line}</li>
                        )
                    })}
                </ul>
                </>
            )
        } else {
            return null;
        }
    }


    render(){
        console.log(this.renderPageItems(this.props.API))
        return(
            <>
            {this.renderPageItems(this.props.API)}
            </>
        )
    }
}