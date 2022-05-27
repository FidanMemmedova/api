async function WeatherForecast() {
    try {
        let res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Baku&exclude=hourly,minutely&units=metric&appid=37386194883ac24155ba7ca40dfc3582");
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function Forecast() {
    let weather = await WeatherForecast();
    let html = ' ';
    weather.forEach(info => {
        let htmlSegment =

    });
}
// async function Countries() {
//     try {
//         let result = await fetch("https://restcountries.com/v3.1/all");
//     } catch (error) {
//         console.log(error);
//     }
// }
// async function myFunction(){
//     let countr
// }