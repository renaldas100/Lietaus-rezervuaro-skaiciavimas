import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';



function Skaiciuokle() {
    const [l, setl] = useState();
    const [lval, setlval] = useState();
    const [val, setval] = useState();
    const [rezultatas, setRezultatas] = useState(0);
    const [talpa, settalpa] = useState(0);
    const [pildymogreitis, setpildymogreitis] = useState(0);
    const [pildymolaikas, setpildymolaikas] = useState(0);
    const [spalvos, setspalvos] = useState(0);
    const [uzpildymas, setuzpildymas] = useState(0);
    const [pranesimas, setpranesimas] = useState();
    const cssClass = "py-2 mb-0 " + spalvos;




    let uzpildymoprocentai = (lval * val) * 100 / l;


    const suskaiciuojam = () => {
        setRezultatas(lval * val);
        settalpa(l);
        setpildymogreitis(lval);
        setpildymolaikas(val)
        // setl("");
        // setlval("");
        // setval("");
        setpranesimas("");
        setuzpildymas(uzpildymoprocentai);
        ispejimai();

    }


    const ispejimai = (event) => {
        if (uzpildymoprocentai <= 80) {
            setspalvos("bg-success");
        }

        if (uzpildymoprocentai > 80 && uzpildymoprocentai < 100) {
            setspalvos("bg-warning");
            setpranesimas(<h5 class="bg-warning mt-0 py-2">Rezervuaro talpa kritiškai pripildyta</h5>)
        }

        if (uzpildymoprocentai >= 100) {
            setspalvos("bg-danger");
            setpranesimas(<h5 class="bg-danger mt-0 py-2">Rezervuaro talpa yra perpildyta</h5>)
        }
    }


    const changel = (event) => {
        setl(event.target.value)
    }

    const changelval = (event) => {
        setlval(event.target.value)
    }

    const changeval = (event) => {
        setval(event.target.value)
    }


    return (
        <div class="container">
            <div class="row mt-5">
                <div className="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h4>Lietaus rezervuaro talpos skaičiavimas</h4>
                        </div>
                        <div class="card-body">
                            <div class="my-3">
                                <h6>Įrašykite rezervuaro talpą (l)</h6>
                                <input type="text" value={l} onChange={changel}></input>
                            </div>
                            <div class="my-3">
                                <h6>Įrašykite rezervuaro pildymo greitį (l/val.)</h6>
                                <input type="text" value={lval} onChange={changelval}></input>
                            </div>
                            <div class="my-3">
                                <h6>Įrašykite kiek laiko rezervuaras bus pildomas (val.)</h6>
                                <input type="text" value={val} onChange={changeval}></input>
                            </div>
                            <button type="button" class="btn btn-success" onClick={suskaiciuojam}>Skaičiuoti</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h4>Rezultatas</h4>
                        </div>
                        <div class="card-body">
                            <div class="my-3">
                                <h6>Rezervuaro talpa {talpa} l.</h6>
                                <h6>Rezervuaras buvo pildytas {pildymogreitis} l/val.</h6>
                                <h6>Rezervuaras buvo pildomas {pildymolaikas} val.</h6>
                                <h6>Rezervuaras užpildytas {rezultatas} l lietaus nuotekų.</h6>
                                <h6 class={cssClass}>Rezervuaro užpildymas sudaro {uzpildymas} %</h6>
                                {pranesimas}
                                <div class="mt-3">
                                <ProgressBar now={ uzpildymas } label={`${ uzpildymas }%`} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>


    )

}
export default Skaiciuokle;