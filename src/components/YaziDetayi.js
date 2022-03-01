import { api } from "../api";
import React, { useEffect, useState } from "react";
import YaziYorumlari from "./YaziYorumlari";
import axios from "axios";





const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);
    //const [display_name,setDisplay_name]=useState('');
    // const[body,setBody]=useState(''); //iki ayrı state parçası açabiliriz
   
   
   //bize yorumu getirecek olan kod parçacığı 
    const handleCommentSubmit = (event,yorum) => {
        event.preventDefault(); 
        api()
        .post(`/posts/${id}/comments`,yorum)
        .then((response) => {
            setYorumlar([...yorumlar, response.data]);
            
        })
    }



    useEffect(() => {
        //axios.all sayesinde iki benzer isteği birlite getirebiliriz.String yerine diziyle yaparız.

        axios.all([
            api().get(`/posts/${id}`), //datayı verir
            api().get(`/posts/${id}/comments`) //yorumları getirir
        ]).then(responses => {
            setYaziDetayi(responses[0].data)
            setYorumlar(responses[1].data)
        }).catch(error=>{
            console.log(error)
        })



        /*axios
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
            }).catch(error => {
                console.log(error)
            })*/
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
        <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit}/>
     
    </React.Fragment>)

}
export default YaziDetayi;