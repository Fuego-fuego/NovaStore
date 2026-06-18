import Btn from "../../components/ui/Button/Button"

const Home = () => {

    return (
        <>
        <h1>NovaStore Home</h1>
        <div className="flex flex-col gap-2">
            <div className="grid place-items-center bg-white p-6"> 
            <Btn text="primary"/>
            </div>
            <div className="grid place-items-center bg-black p-6">
                <Btn text="inverted"variant="inverted"/>
            </div>
            <div className="grid place-items-center bg-white p-6">
                <Btn text="ghost"variant="ghost"/>
            </div>
            <div className="grid place-items-center bg-white p-6">                
            <Btn text="login"variant="login"/>
            </div>
            <div className="grid place-items-center bg-white p-6">                
            <Btn text="sign up" variant="sign-up"/>
            </div>
        </div>
        </>
    )
}



export default Home