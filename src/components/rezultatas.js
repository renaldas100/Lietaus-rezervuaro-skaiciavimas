import ProgressBar from "react-bootstrap/ProgressBar";


function Rezultatas(props){


let cssClass="progress-bar";
if(props.uzpildymas<=80){
    cssClass+=" bg-success";
}

if(props.uzpildymas>80&&props.uzpildymas<100){
    cssClass+=" bg-warning";
}
if(props.uzpildymas>=100){
    cssClass+=" bg-danger";
}

return (
    <div className="card">
        <div className="card-header">
            <h4>Rezultatas</h4>
        </div>
        <div className="card-body">
            <div className="my-3">
                <h6>Rezervuaro talpa {props.talpa} l.</h6>
                <h6>Rezervuaras buvo pildytas {props.pildymogreitis} l/val.</h6>
                <h6>Rezervuaras buvo pildomas {props.pildymolaikas} val.</h6>
                <h6>Rezervuaras užpildytas {props.rezultatas} l lietaus nuotekų.</h6>
                <h6 className={props.cssClass}>Rezervuaro užpildymas sudaro {props.uzpildymas} %</h6>
                {props.pranesimas}
                {/*<div className="mt-3">*/}
                {/*    <ProgressBar style={{height: 50 + 'px'}}  now={props.uzpildymas} label={`${props.uzpildymas}%`}/>*/}
                {/*</div>*/}
                <div className="progress" role="progressbar" style={{height:'50px'}}>
                    <div className={cssClass} style={{width: props.uzpildymas+"%"}}>{props.uzpildymas} %</div>
                </div>


            </div>
        </div>
    </div>
)

}
export default Rezultatas;