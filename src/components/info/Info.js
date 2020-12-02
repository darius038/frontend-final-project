
function Info(){
    return(
        <div className="container">
            <h3 className="display-4">Information</h3>
            <p className="lead">This is a simple REACT SPA for domain name data fetching from domainsdb API</p>
            <p> Fetched domain data: name,	country, registration date, domain A, NS and CNAME properties.</p>
            <p> Implemented fetched data validation to avoid unexpected errors. You can add domain data to "Favourites"
                list, view list and dlete domains from list</p>
            <p> Used API - https://api.domainsdb.info/v1/ </p>
            <hr className="my-4"></hr>
                <p>Created by KITM .NET/20 student Darius Pavolis</p>
        </div>
    )
}

export default Info;