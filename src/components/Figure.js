const Figure =(props)=> {
  
    const caption = props.caption
    const age = props.age
    
    return (
        <figure className="figure">
            <img src="https://via.placeholder.com/250x250" alt="placeholder img" className="img-fluid image figure-img rounded" />
        <figcaption className="figure-caption">{caption}</figcaption>
        <figcaption className="figure-caption">Age: {age}</figcaption>
        </figure>
    )
}

export default Figure