import resources from "src/resources"


@Component("lift")
export class Lift {
  liftPosition: string 
  constructor(liftPosition: string) {
    this.liftPosition = liftPosition
  }
}
  

export function loadPlane(
    name:string,
    planeMaterial:Material,
    transform:TranformConstructorArgs,
    collisions:boolean)
    {
    //load planes
    const ent:Entity = new Entity(name)
    if (name == 'cyberCircle'){
        ent.addComponent(new Lift('down'))
    }
    const plane:PlaneShape = new PlaneShape()
    plane.withCollisions = collisions
    const planeTransform = new Transform()
    planeTransform.position = transform.position!
    planeTransform.scale = transform.scale!
    planeTransform.rotation = transform.rotation!


    ent.addComponent(plane)
    ent.addComponent(planeMaterial)
    ent.addComponent(planeTransform)
    engine.addEntity(ent)
    

}