
let data:any
export async function weatherAsyncTask() {
   try {
     
        data = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.85&lon=2.35&appid=28977ed688af746f3c8b382e2df27756&units=metric')
        .then(data => data.json())
       log('---Weather')
       log(data.main.temp)
       let parisTemp:string = data.main.temp

       //Up Text
 const parisWeather:Entity = new Entity()
 const parisText = new TextShape(`Paris Temp : ${parisTemp} c`)
 const parisTxtTransform = new Transform()
 parisText.fontSize = 5
 parisText.color = Color3.Blue()
 parisTxtTransform.position = new Vector3(1,8,1)
 parisTxtTransform.rotation = Quaternion.Euler(0,235,0)
 parisWeather.addComponent(parisText)
 parisWeather.addComponent(parisTxtTransform)
 engine.addEntity(parisWeather)

   } catch (e) {
   }
 
 }
 
 
 