import { useState, useEffect } from "react";
import "../style/todo.css";

export const Todo = () => {
    useEffect(() => {
        fetch("/todo/", {
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            setItems(data.message);
            setLoading(false);
        })
    }, []);

    const [items, setItems] = useState([]);
    const [item, setItem] = useState("");
    const [loading, setLoading] = useState(true);

    const changeItem = (e) => {
        setItem(e.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();
        const date = new Date();
        const idItem = Date.now(); 

        setItems([...items, { content: item, checked: false, date: String(date), idItem: idItem }]);
        setItem("");

        fetch("/todo/", {
            method: "POST",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token"),
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                content: item,
                checked: false,
                date: date,
                idItem: String(idItem)
            })
        });
    }
    const deleteItem = (id) => {
        fetch(`/todo/${id}`, {
            method: "DELETE",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token"),
                "Content-Type":"application/json"
            }
        });

        const newItemsArr = items.filter(el => el.idItem !== id);
        
        setItems(newItemsArr);
    }
    const checkedItem = (id) => {
        const newItemsArr = items.map(el => {
            if(el.idItem === id){
                el.checked = !el.checked;
                fetch(`/todo/${id}`, {
                    method: "PUT",
                    headers: {
                        "authorization": "Bearer " + localStorage.getItem("token"),
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        checked: el.checked
                    })
                });
            }

            return el;
        });

        setItems(newItemsArr);
    }

    if(!loading && !items.length) {
        return (
            <div className="wrapper__content">
            <form onSubmit={submitForm} className="wrapper__todo-form">
                <input placeholder="Item: " value={item} onChange={changeItem} required/>
                <button>Add item</button>
            </form>
            <h2 className="logo__main">You don't have items</h2>
        </div>
        )
    } else if(!loading) {
        return (
            <div className="wrapper__content">
                <form onSubmit={submitForm} className="wrapper__todo-form">
                    <input placeholder="Item: " value={item} onChange={changeItem} required/>
                    <button>Add item</button>
                </form>
                <ul className="items__list">
                    {items.map(el => {
                         return ( <li key={el.idItem}>
                            <input type="checkbox" checked={el.checked} onChange={() => checkedItem(el.idItem)}/>
                            <span>{el.content}</span>
                            <span className="item-date">{el.date}</span>
                            <button onClick={() => deleteItem(el.idItem)}>Delete</button>
                        </li>  
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return <div>Loading ...</div>
    }
}
