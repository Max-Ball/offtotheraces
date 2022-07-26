
export class Racer{

  constructor(name, picture, number, distance){
    this.name = name
    this.picture = picture
    this.number = number
    this.distance = distance
}

get Template(){
  return ` 
    <div class="col-12 my-3">
      <h3>
        <span id="${this.number}">${this.picture}</span>
      </h3>
    </div>
  `
}

  move(){
    if(this.distance >= 95){
      this.distance == 0
    }
    return this.distance += Math.floor(Math.random() * 4)
}

}