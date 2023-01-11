import { useState } from "react";

function Ivedimas(props){
    const [skdata, setSkdata] =useState({
        l:0,
        lval:0,
        val:0,

    });
    const [talpa, settalpa] = useState(0);
    const [pildymogreitis, setpildymogreitis] = useState(0);
    const [pildymolaikas, setpildymolaikas] = useState(0);
    const [spalvos, setspalvos] = useState(0);
    const [pranesimas, setpranesimas] = useState();
    const cssClass = "py-2 mb-0 " + spalvos;




    const suskaiciuojam = (event) => {
        event.preventDefault();
        console.log(skdata);
        props.onUpdateData(skdata);
        setSkdata({
            l:0,
            lval:0,
            val:0,
        })
    }

    const changel = (event) => {
        setSkdata({
            ...skdata,
            l:event.target.value
        });
    }

    const changelval = (event) => {
        setSkdata({
            ...skdata,
            lval:event.target.value
        });
    }

    const changeval = (event) => {
        setSkdata({
            ...skdata,
            val:event.target.value
        });
    }


return(
    <div className="card">
        <div className="card-header">
            <h4>Lietaus rezervuaro talpos skaičiavimas</h4>
        </div>
        <div className="card-body">
            <form onSubmit={suskaiciuojam}>
                <div className="my-3">
                    <h6>Įrašykite rezervuaro talpą (l)</h6>
                    <input type="text" value={skdata.l} onChange={changel}></input>
                </div>
                <div className="my-3">
                    <h6>Įrašykite rezervuaro pildymo greitį (l/val.)</h6>
                    <input type="text" value={skdata.lval} onChange={changelval}></input>
                </div>
                <div className="my-3">
                    <h6>Įrašykite kiek laiko rezervuaras bus pildomas (val.)</h6>
                    <input type="text" value={skdata.val} onChange={changeval}></input>
                </div>
                <button type="submit" className="btn btn-success">Skaičiuoti</button>
            </form>
        </div>
    </div>
);

}
export default Ivedimas;