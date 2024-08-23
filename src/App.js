import Figure from "./components/Figure"
import users from './users'

const App =()=> {

const figures = users.map(user => {
    return <Figure
        key={user.id} 
        caption={user.caption} 
        age={user.age}
    />
})
   
    console.log(figures)

    return (
        <>
            { figures }
        </>
    )
}

export default App