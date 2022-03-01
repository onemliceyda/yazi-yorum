import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";

const YaziListesi = (props) => {

    const [yaziListesi, setYaziListesi] = useState([])
    useEffect(() => {
        api()
            .get("/posts")
            .then((response) => {
                setYaziListesi(response.data);
            })
    }, []); //sadece uygulama başladığında bir kez çalışacak axios sorgusu yazdık.



    return (
        <div className="ui relaxed divided list">
            {yaziListesi.map((yazi) => {
                return (<div className="item" key={yazi.id}>
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <Link to={`/posts/ ${yazi.id}`} className="header">{yazi.title}</Link>
                        <div className="description">{yazi.created_at}</div>
                    </div>
                </div>)
            })}
            {""}
        </div>
    )
}
export default YaziListesi;