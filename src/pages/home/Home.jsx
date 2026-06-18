import Input from "../../components/ui/Input/Input"

const Home = () => {

    return (
        <>
        <h1>NovaStore Home</h1>

        <div className="container-custom grid gap-2">
            <Input type="text" label="name" placeholder="John Doe"/>
            <Input type="email" label="email" placeholder="example@mail.com"/>
            <Input type="tel" label="telephone Number" placeholder="0700000000" />
        </div>
        </>
    )
}



export default Home