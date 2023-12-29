import WeatherCard from "../components/WeatherCard"
const Home = ()=>{
    
    return(
        <main className="bg-white m-10 flex-col">
            <div className="bg-gray-300 flex justify-center rounded-xl" >
            <WeatherCard></WeatherCard>
            </div>
        </main>
    )
}
export default Home