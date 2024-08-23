const Header =()=> {

    // We can write Javascript code above return. 
    const myName = 'Shaquella'

    return (
        <header>
        {/* JSX requires us to use className rather than class  */}
        <div className="container">
        {/* The JS code can, then, be passed into our JSX code. The JS code is placed inside curly braces, {}. */}
            <h1 className="text-center display-2">A React App by { myName }</h1>
        </div>
        </header>
    )
}

export default Header