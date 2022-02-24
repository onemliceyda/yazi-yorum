import React from "react";
import { useState } from "react";


const yorumBaslangic = {
    display_name: "",
    body: "",
};


const YorumFormu = (props) => {

    const [yorum, setYorum] = useState(yorumBaslangic);

    const handleOnChange = event => {
        setYorum({ ...yorum, [event.target.name]: event.target.value })
    }
    return (
        <React.Fragment>
            <h3>Yorum Yap</h3>
            <form className="ui form" onSubmit={(event)=>{
                props.handleSubmit(event,yorum)
            setYorum(yorumBaslangic)}}>
                <div className="ui mini icon input">
                    <input
                        name="display_name"
                        type="text"
                        placeholder="Adınız"
                        onChange={handleOnChange}
                        value={yorum.display_name} />
                </div>

                <textarea
                    name="body"
                    placeholder="Yorumunuz"
                    rows="3"
                    onChange={handleOnChange}
                    value={yorum.body}>

                </textarea>
                <button className="ui olive button" type="submit">Yorum Gönder</button>
            </form>
        </React.Fragment>
    )
}
export default YorumFormu;