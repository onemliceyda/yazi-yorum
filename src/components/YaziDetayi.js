import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);
    //const [display_name,setDisplay_name]=useState('');
    // const[body,setBody]=useState(''); //iki ayrı state parçası açabiliriz
    const [yorum, setYorum] = useState(
        {
            display_name: "",
            body: "",
        });

    const handleCommentSubmit = (yorum) => {
        axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
            yorum
        ).then((response) => {
            setYorumlar([...yorumlar,response.data]);
        })
    }


    const handleOnChange = event => {
        setYorum({ ...yorum, [event.target.name]: event.target.value })
    }

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
                console.log(response.data)
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
        <h3>YORUMLAR</h3>
        {yorumlar.map(yorum => {
            return (<div className="ui relaxed list" key={yorum.id}>
                <div className="item">
                    <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" />
                    <div className="content">
                        <a className="header">{yorum.display_name}</a>
                        <div className="description">{yorum.body}</div>
                    </div>
                </div>
            </div>)
        })}
        <h3>YORUM YAZ </h3>

        <form className="ui form" onSubmit={
            (e) => {
            e.preventDefault();
            handleCommentSubmit(yorum)
        }
        }>
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




    </React.Fragment>)

}
export default YaziDetayi;