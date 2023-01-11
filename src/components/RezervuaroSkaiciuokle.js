import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Ivedimas from "./ivedimas";
import Rezultatas from "./rezultatas";



function Skaiciuokle() {
    const [skdata, setSkdata] =useState({
        l:0,
        lval:0,
        val:0,

    });
    const [rezultatas, setRezultatas] = useState(0);
    const [talpa, settalpa] = useState(0);
    const [pildymogreitis, setpildymogreitis] = useState(0);
    const [pildymolaikas, setpildymolaikas] = useState(0);
    const [spalvos, setspalvos] = useState(0);
    const [uzpildymas, setuzpildymas] = useState(0);
    const [pranesimas, setpranesimas] = useState();
    const cssClass = "py-2 mb-0 " + spalvos;

    const updateData=(data)=> {
        setSkdata(data);
        setRezultatas(data.lval * data.val);
        setuzpildymas((data.lval * data.val) * 100 / data.l);
        settalpa(data.l);
        setpildymogreitis(data.lval);
        setpildymolaikas(data.val)

        if(((data.lval * data.val) * 100 / data.l)<=80){
            setpranesimas(<h5></h5>);
            setspalvos("bg-success");
        }

        if(((data.lval * data.val) * 100 / data.l)>80 &&((data.lval * data.val) * 100 / data.l)<100) {
            setpranesimas(<h5 className="bg-warning mt-0 py-2">Rezervuaro talpa kritiškai pripildyta</h5>);
            setspalvos("bg-warning");
        }
        if(((data.lval * data.val) * 100 / data.l)>=100) {
            setpranesimas(<h5 className="bg-danger mt-0 py-2">Rezervuaro talpa yra perpildyta</h5>);
            setspalvos("bg-danger");
        }
    }
    console.log(talpa);


    return (
        <div class="container">
            <div class="row mt-5">
                <div className="col-md-6">
                    <Ivedimas onUpdateData={updateData}></Ivedimas>
                </div>
                <div className="col-md-6">
                    <Rezultatas rezultatas={rezultatas} uzpildymas={uzpildymas} cssClass={cssClass} pranesimas={pranesimas} talpa={talpa} pildymogreitis={pildymogreitis} pildymolaikas={pildymolaikas}></Rezultatas>
                </div>


            </div>

        </div>


    )

}
export default Skaiciuokle;