
import { useState } from 'react'
import './NoteCard.css'


const NoteCard = ({id,title, body}) =>{


    const [defaultValue,setDefaultValue] = useState({
        id : id,
        title : title,
        body : body
    })
    const [showEditForm, setShowEditShow] = useState(false)

    const handleEdit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/notes/${id}`,{
            method : "PATCH",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                title : defaultValue.title,
                body : defaultValue.body
            })
        })

        window.location.href = '/home'

    }

    const handleDelete =(args)=>{
        fetch(`http://localhost:5000/notes/${args}` , {
            method : "DELETE",
            mode : "cors",
            headers :{
            "Content-Type" : "application/json"
        }
        })

        window.location.href = "/home"
    }

    return(
        <section className="noteCard" id={id}>
            <div className="contener">
            <i className="fa fa-edit edit_icon" onClick={()=>{
                setShowEditShow(!showEditForm)
            }}></i>
            <i className="fa fa-trash del-icon" onClick={()=>{
                handleDelete(id)
            }}></i>
            </div>
            {showEditForm ? (
                <form className="formEdit" onSubmit={handleEdit}> 
                    <label htmlFor="title" className="titleText">Edit Judul</label>
                    <input type="text" id='title' name='title' className="editInput" value={defaultValue.title} onChange={(e)=>{
                        setDefaultValue({
                            ...defaultValue,
                            title : e.target.value})

                    }}/>
                    <label htmlFor="body" className="bodyText">Edit Content</label>
                    <textarea name="body" id="body" className="editTextarea" value={defaultValue.body} onChange={(e)=>{
                        setDefaultValue({
                            ...defaultValue,
                            body : e.target.value
                        })
                    }}></textarea>
                    <button type="submit">simpan</button>
                </form>
            ) : (
                <>
            <h2 className="note_title">{title}</h2>
            <p className="note_body" dangerouslySetInnerHTML={{__html : body}} ></p>
                </>
            )}

        </section>
    )
}

export default NoteCard
