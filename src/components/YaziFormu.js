import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const YaziFormu = (props) => {


    const [yazi, setYazi] = useState({ title: "", content: "" });
    const[hata,setHata]=useState("")
    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata(""); //form ilk başlarken hatayı temizliğyoruz



        axios.post('https://react-yazi-yorum.herokuapp.com/posts/', yazi)
            .then(response => {
              props.history.push('/ ')
            }).catch(error=>{
               setHata("Başlık ve yazı içeriği alanları zorunludur")    
            })
    }

    //kullanıcı her harfe bastığında state'e kaydedilmesini sağlayacaktır.
    const onInputChange = (event) => setYazi({ ...yazi, [event.target.name]: event.target.value });

    return (
        <div className="ui form">
            <div className="field">
                <label>Yazı Başlığı</label>
                
                <input value={yazi.title} type="text" name="title" onChange={onInputChange} />
            </div>
            <div className="field">
                <label>Yazı İçeriği</label>
                <textarea value={yazi.content} rows="3" name="content" onChange={onInputChange} ></textarea>
            </div>
            <button className="ui primary button" onClick={onFormSubmit}>
                Gönder
            </button>
            <button className="ui button" onClick={onFormSubmit}>
                İptal Et
            </button>
            <Link  to="/" >Anasayfaya Dön</Link>
        </div>)
}
export default withRouter(YaziFormu);