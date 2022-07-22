import pointer from './images/pointer.png'
export default function Journal(props){
    return (
            <div className="journal">
            <img src={props.imageUrl} alt={props.title} className="journal--img"/>
                <div className="journal--text">
                    <img src={pointer} alt="pointer" className="journal--text--pointer"/>
                    <span className="journal--text--country">{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl} className="journal--text--google">View on Google Maps</a>
                    <h2 className="journal--text--title">{props.title}</h2>
                    <h6 className="journal--text--date">{props.startDate} - {props.endDate}</h6>
                    <p className="journal--text--desc">{props.description}</p>
                </div>
            </div>
    )
}