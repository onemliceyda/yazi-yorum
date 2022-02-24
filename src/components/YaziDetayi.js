import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);
    useEffect(() => {
        axios
            .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
            .then((response) => {
                setYaziDetayi(response.data)
            })
            .catch(error => {
                console.log(error)
            });
        axios
            .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
            .then((response) => {
                setYorumlar(response.data)
            });
    }, [])


    return (<React.Fragment>
        <h2 className="ui header">{yaziDetayi.title}</h2>
        <p>{yaziDetayi.created_at}</p>
        <p>{yaziDetayi.content}</p>
        {/* 
        //Yorumlar başlığı gösterilecek
        //Yorumlar Listesi Gösterilecek
        //Yorum yazabilmek için yorum yazma formu 
        */}

        {yorumlar.map(yorum => {
            return (<div className="ui relaxed list">
                <div className="item">
                    <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" />
                    <div className="content">
                        <a className="header">Daniel Louise</a>
                        <div className="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
                    </div>
                </div>
            </div>)
        })}
    </React.Fragment>)

}
export default YaziDetayi;