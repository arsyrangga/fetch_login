import './NoteContainer.css'
import NoteCard from "./NoteCard"
import {useEffect, useState} from 'react'


const NoteContainer = () =>{

    const [ note , setNote ] = useState()

    const [modal, setModal] = useState(false)
    //mengambil data dari database
    //tangkap user yang login
    
    useEffect(()=>{
    const user = sessionStorage.getItem("user")

    //ambil data notes
    fetch(`http://localhost:5000/notes?user_email=${user}`, {
        method : "GET",
        mode : "cors",
        headers : {
            "Content-Type" : "application/json"
        }
    })

    .then(res => res.json())
    .then(data => {

        //kita simpan ke state
        setNote(data)
    })
}, [])
    
    // buat penampung sementara form
    const [addNote,setAddNote] = useState({
        user_email : sessionStorage.getItem('user'),
        title : "",
        body : ""
    })

    //function untuk menambah data ke database
    const handleDataStore = (e) =>{
        // alert(`
        //     user_email = ${addNote.user_email}
        //     title : ${addNote.title}
        //     body : ${addNote.body}

        // `)
        e.preventDefault()
        fetch("http://localhost:5000/notes", {
            method : "POST",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(addNote)
        })

        window.location.href = '/home'
    }

    return(
    <>

            {/* ICON MODAL */}
            <i className="fa fa-plus add_icon" onClick={()=>{setModal(!modal)}}></i>
            {/* FORM INPUT NOTE */}

            {modal ? (
                <div className="form-container">
                <form className="add_note" onSubmit={handleDataStore}>
                    <label htmlFor="add_title">Masukkan judul Note</label>
                    <input type="text" className="add_title" id="add_title" name="title" onChange={(e)=>{
                        setAddNote({
                            ...addNote,
                            title : e.target.value
                        })
                    }}/>
                    <label htmlFor="add_body">Masukan Note</label>
                    <textarea className="add_body" name="body" id="add_body" cols="30" rows="10" onChange={(e)=>{
                        setAddNote({
                            ...addNote,
                            body : e.target.value
                        })
                    }}></textarea>
                    
                    <button className="btn_add_note" type="submit">Tambah Note</button>
                </form>
                </div>
            ) : null}

            

        <section className="noteContainer">
            {/* check apakah notes sudah berisi data */}

            {note && (
                <>
                    {note.map((e)=>(

                        <NoteCard 
                        key={e.id}
                        id={e.id}
                        title={e.title} 
                        body={e.body}
                        />

                    ))}
                    
                </>
            )}
            
            
        </section>


    </>
    )
}

export default NoteContainer