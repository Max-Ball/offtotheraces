import { AppState } from "./AppState.js";

console.log(AppState);

function _drawRacers(){
  let racers = AppState.racers
  let template = ''
  racers.forEach(racer => template += racer.Template)
  document.getElementById('racers').innerHTML = template
  console.log('racer', template);

}

let raceInterval = setInterval(_moveRacers, 300)

function _moveRacers(){
  let racers = AppState.racers
  racers.forEach(racer => {
    document.getElementById(racer.number).style.paddingLeft = `${racer.move()}%`
    console.log(racer.distance)
    if(racer.distance >= 95){
      clearInterval(raceInterval)
      window.alert("Winner!")
    }
  })
    
  }

function _resetRacers(){
  let racers = AppState.racers
  racers.forEach(racer => {
    document.getElementById(racer.number).style.paddingLeft = "0%"
  })
}

class RaceController{
  constructor(){


    _drawRacers()
    _moveRacers()
    _resetRacers()
  }
}

let controller = new RaceController()
window['app'] = {controller : controller}