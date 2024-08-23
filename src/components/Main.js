import Section from "./Section"

const Main =()=> {

    return (
        <main>
            <div className="container">
        {/* We can add as many compenents as needed! */}
                <div className="row">
                    <div className="col-md-4">
                        <Section />
                    </div>
                    <div className="col-md-4">
                        <Section />
                    </div>
                    <div className="col-md-4">
                        <Section />
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Main