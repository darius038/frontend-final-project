//import "./domainitem.scss"
import React from 'react';

function FavDomainItem(props) {

    let cname = !props.cname ? "no records" :props.cname;
    let aprop = !props.a ? "no records" :props.a.map((a)=><p>{a}</p>);
    let nsprop = !props.ns ? "no records" :props.ns.map((ns)=><p>{ns}</p>);

    return (
        <div className="row pl-1">
            <div className="card mb-3 ml-4 mr-4 ">
                <div className="card-header">
                    <h5 className="card-title">{props.name}</h5>
                </div>
                <div className="card-body">
                    <dl className="row">
                        <dt className="col-sm-3">Country:</dt>
                        <dd className="col-sm-9">{props.country}</dd>
                        <dt className="col-sm-3 text-truncate">Registration date:</dt>
                        <dd className="col-sm-9">{props.regdate}</dd>
                        <dt className="col-sm-3">A</dt>
                        <dd className="col-sm-9">{aprop}</dd>
                        <dt className="col-sm-3">NS</dt>
                        <dd className="col-sm-9">{nsprop}</dd>
                        <dt className="col-sm-3">CNAME</dt>
                        <dd className="col-sm-9">{cname}</dd>
                    </dl>
                    <button type="submit" className="btn btn-primary"
                            data-id={props.name} onClick={props.delDomain}>Delete</button>
                </div>
            </div>

        </div>
    );
}

export default FavDomainItem;