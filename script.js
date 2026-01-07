const fetchData  = async(cityname) =>{
    const APIkey ="2bd9721a956d49b6a025e6fef4ea60826"
    const error = document.getElementById("error")
    const output = document.getElementById("output")
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`)
        if(!response.ok) {
            error.textContent = 'Failed to fetch'
            output.textContent = ''
            return
        }
        const data = await response.json()
        console.log(data)
        error.textContent = ''
        output.textContent = `Weather in ${data.name}: ${data.weather[0].description}, ${data.main.temp} °C`
    } catch (e) {
        error.textContent = 'Network error'
        output.textContent = ''
    }
}
const callerFun = () => {
    const searchinput = document.getElementById("searchinput").value.trim();
    const error = document.getElementById("error");
    if (!searchinput) {
        error.textContent = "enter city name"
        return
    }
    console.log(searchinput)
    fetchData(searchinput)
};