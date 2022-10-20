import resources from '../resources'
import {loadPlane, Lift} from './newPlane'
import {elevatorUpDown} from './elivator'
import {weatherAsyncTask} from './weatherAPI'


@Component("spin")
export class Spin {
  spinning: boolean
  speed: number
  constructor(spinning: boolean, speed: number) {
    this.spinning = spinning
    this.speed = speed
  }
}

//Weather 
weatherAsyncTask()


 
//Elevator UP/Down Button

    const elevatorUp = new Entity()
    elevatorUp.addComponent(new Spin(true,20))
    elevatorUp.addComponent(new Transform({ position: new Vector3(9.5, 1.7, 6.8), scale: new Vector3(.3, .3, .3)}))
    elevatorUp.addComponent(new SphereShape())
    
    engine.addEntity(elevatorUp)
  
    elevatorUp.addComponent(
    new OnPointerDown(() => {

      const elevator = engine.getComponentGroup(Lift)
        //Get the entities that belong to the 'Lift' Group
        for (let i = 0; i < elevator.entities.length; i++){

                    for (const entId in engine.entities){
                    
                        if (entId === elevator.entities[i].uuid){
                            elevatorUpDown(engine.entities[entId],.3,6.2)
                        
                        }
                    }
            }

            })
        )
        
    //Down Elevator Code
    const elevatorDown = new Entity()
    elevatorDown.addComponent(new Spin(true,20))
    elevatorDown.addComponent(new Transform({ position: new Vector3(9.5, 7.5, 6.8), scale: new Vector3(.3, .3, .3)}))
    elevatorDown.addComponent(new SphereShape())
    
    engine.addEntity(elevatorDown)
  
    elevatorDown.addComponent(
    new OnPointerDown(() => {

    const elevator = engine.getComponentGroup(Lift)
    log(elevator.entities.length)
    //Get the entities that belong to the 'Lift' Group
    for (let i = 0; i < elevator.entities.length; i++){

                for (const entId in engine.entities){
                
                    if (entId === elevator.entities[i].uuid){
                        elevatorUpDown(engine.entities[entId],6.2,.3)
                    }
                }
            }
        })
    )

    //Up Text
    const upTextEnt1:Entity = new Entity()
    const upText = new TextShape('UP')
    const upTxtTransform = new Transform()
    upText.fontSize = 10
    upText.color = Color3.Blue()
    upTxtTransform.position = new Vector3(0,0,-1)
    upTextEnt1.addComponent(upText)
    upTextEnt1.addComponent(upTxtTransform)
    upTextEnt1.setParent(elevatorUp)

    //Up Text 2
    const upTextEnt2:Entity = new Entity()
    const upTxtTransform2 = new Transform()
    upTxtTransform2.position = new Vector3(-1,0,0)
    upTxtTransform2.rotation = Quaternion.Euler(0,90,0)

    upTextEnt2.addComponent(upText)
    upTextEnt2.addComponent(upTxtTransform2)
    upTextEnt2.setParent(elevatorUp)

    //Up Text 3
    const upTextEnt3:Entity = new Entity()
    const upTxtTransform3 = new Transform()
    upTxtTransform3.position = new Vector3(1,0,0)
    upTxtTransform3.rotation = Quaternion.Euler(0,275,0)

    upTextEnt3.addComponent(upText)
    upTextEnt3.addComponent(upTxtTransform3)
    upTextEnt3.setParent(elevatorUp)

    //Up Text 4
    const upTextEnt4:Entity = new Entity()
    const upTxtTransform4 = new Transform()
    upTxtTransform4.position = new Vector3(0,0,1)
    upTxtTransform4.rotation = Quaternion.Euler(0,180,0)

    upTextEnt4.addComponent(upText)
    upTextEnt4.addComponent(upTxtTransform4)
    upTextEnt4.setParent(elevatorUp)


      //Down Text
      const downTextEnt1:Entity = new Entity()
      const downText = new TextShape('Down')
      const downTxtTransform = new Transform()
      downText.fontSize = 7
      downText.color = Color3.Blue()
      downTxtTransform.position = new Vector3(0,0,-1)
      downTextEnt1.addComponent(downText)
      downTextEnt1.addComponent(downTxtTransform)
      downTextEnt1.setParent(elevatorDown)

      //down Text 2
      const downTextEnt2:Entity = new Entity()
      const downTxtTransform2 = new Transform()
      downTxtTransform2.position = new Vector3(-1,0,0)
      downTxtTransform2.rotation = Quaternion.Euler(0,90,0)

      downTextEnt2.addComponent(downText)
      downTextEnt2.addComponent(downTxtTransform2)
      downTextEnt2.setParent(elevatorDown)

      //down Text 3
      const downTextEnt3:Entity = new Entity()
      const downTxtTransform3 = new Transform()
      downTxtTransform3.position = new Vector3(1,0,0)
      downTxtTransform3.rotation = Quaternion.Euler(0,275,0)

      downTextEnt3.addComponent(downText)
      downTextEnt3.addComponent(downTxtTransform3)
      downTextEnt3.setParent(elevatorDown)

      //down Text 4
      const downTextEnt4:Entity = new Entity()
      const downTxtTransform4 = new Transform()
      downTxtTransform4.position = new Vector3(0,0,1)
      downTxtTransform4.rotation = Quaternion.Euler(0,180,0)

      downTextEnt4.addComponent(downText)
      downTextEnt4.addComponent(downTxtTransform4)
      downTextEnt4.setParent(elevatorDown)





    //Load floor
    const floorEnt:Entity = new Entity()
    const floorModel:GLTFShape = resources.models.standard.cyberFloor
    const floorTransform:Transform = new Transform()

    floorTransform.position = new Vector3(8,6,8)

    floorEnt.addComponent(floorModel)
    floorEnt.addComponent(floorTransform)
    engine.addEntity(floorEnt)


    //material reuse
    let floor_1_op_text:Texture = resources.textures.floor_1_op
    let cyberCircle:Texture =  resources.textures.cyberCircle
    let floor_1_text: Texture = resources.textures.floor_1
    let floor_2_text: Texture =  resources.textures.floor_2
    let floor_3_text: Texture =  resources.textures.floor_3
    let floor_4_text: Texture =  resources.textures.floor_4

    let floor_1_op_material:Material = new Material()
    floor_1_op_material.albedoTexture = floor_1_op_text
    floor_1_op_material.alphaTexture = floor_1_op_text
    floor_1_op_material.alphaTest = .2
    floor_1_op_material.emissiveColor = Color3.White()
    floor_1_op_material.emissiveIntensity = 1 
    floor_1_op_material.transparencyMode = 1
    
    let floor_1_material:Material = new Material()
    floor_1_material.albedoTexture = floor_1_text
    floor_1_material.alphaTexture = floor_1_text
    floor_1_material.alphaTest = .2
    floor_1_material.emissiveColor = Color3.Blue()
    floor_1_material.emissiveIntensity = 1 
    floor_1_material.transparencyMode = 1
    
    let floor_2_material:Material = new Material()
    floor_2_material.albedoTexture = floor_2_text
    floor_2_material.alphaTexture = floor_2_text
    floor_2_material.alphaTest = .2
    floor_2_material.emissiveColor = Color3.Red()
    floor_2_material.emissiveIntensity = 2 
    floor_2_material.transparencyMode = 1
    
    let floor_3_material:Material = new Material()
    floor_3_material.albedoTexture = floor_3_text
    floor_3_material.alphaTexture = floor_3_text
    floor_3_material.alphaTest = .2
    floor_3_material.emissiveColor = Color3.White()
    floor_3_material.emissiveIntensity = 1 
    floor_3_material.transparencyMode = 1
    
    let floor_4_material:Material = new Material()
    floor_4_material.albedoTexture = floor_4_text
    floor_4_material.alphaTexture = floor_4_text
    floor_3_material.alphaTest = .2
    floor_3_material.emissiveColor = Color3.White()
    floor_3_material.emissiveIntensity = 1 
    floor_3_material.transparencyMode = 1
    
    let lift_material:Material = new Material()
    lift_material.albedoTexture = floor_4_text
    lift_material.alphaTexture = floor_4_text
    lift_material.alphaTest = .3
    lift_material.emissiveColor = Color3.Gray()
    lift_material.emissiveIntensity = 1
    lift_material.transparencyMode = 1


export function loadStaticScene(){
//Load cyberCircle
    const cyberCircle_Transform = new Transform()
    cyberCircle_Transform.position = new Vector3(8,0.5,8)
    cyberCircle_Transform.scale = new Vector3(4,4,4)
    cyberCircle_Transform.rotation = Quaternion.Euler(90,0,0)
    loadPlane('cyberCircle',lift_material,cyberCircle_Transform,true)

//Load L1 floor
    const fp1_Transform = new Transform()
    fp1_Transform.position = new Vector3(4,0.02,4)
    fp1_Transform.scale = new Vector3(8,8,8)
    fp1_Transform.rotation = Quaternion.Euler(90,270,0)
    loadPlane('floor_1',floor_1_op_material,fp1_Transform,true)

    const fp2_Transform = new Transform()
    fp2_Transform.position = new Vector3(12,0.02,4)
    fp2_Transform.scale = new Vector3(8,8,8)
    fp2_Transform.rotation = Quaternion.Euler(270,180,90)
    loadPlane('floor_1_op',floor_1_op_material,fp2_Transform,true)

    const fp3_Transform = new Transform()
    fp3_Transform.position = new Vector3(4,0.02,12)
    fp3_Transform.scale = new Vector3(8,8,8)
    fp3_Transform.rotation = Quaternion.Euler(270,0,90)
    loadPlane('floor_1_op',floor_1_op_material,fp3_Transform,true)

    const fp4_Transform = new Transform()
    fp4_Transform.position = new Vector3(12,0.02,12)
    fp4_Transform.scale = new Vector3(8,8,8)
    fp4_Transform.rotation = Quaternion.Euler(90,90,0)
    loadPlane('floor_1_op',floor_1_op_material,fp4_Transform,true)

  //l1 lv1
    const l1_q1_Transform = new Transform()
    l1_q1_Transform.position = new Vector3(4,6,4)
    l1_q1_Transform.scale = new Vector3(8,8,8)
    l1_q1_Transform.rotation = Quaternion.Euler(90,270,0)
    loadPlane('floor_1',floor_1_material,l1_q1_Transform,false)
  
    const l1_q2_Transform = new Transform()
    l1_q2_Transform.position = new Vector3(12,6,4)
    l1_q2_Transform.scale = new Vector3(8,8,8)
    l1_q2_Transform.rotation = Quaternion.Euler(270,180,90)
    loadPlane('floor_1',floor_1_material,l1_q2_Transform,false)

    const l1_q3_Transform = new Transform()
    l1_q3_Transform.position = new Vector3(4,6,12)
    l1_q3_Transform.scale = new Vector3(8,8,8)
    l1_q3_Transform.rotation = Quaternion.Euler(270,0,90)
    loadPlane('floor_1',floor_1_material,l1_q3_Transform,false)

    const l1_q4_Transform = new Transform()
    l1_q4_Transform.position = new Vector3(12,6,12)
    l1_q4_Transform.scale = new Vector3(8,8,8)
    l1_q4_Transform.rotation = Quaternion.Euler(90,90,0)
    loadPlane('floor_1',floor_1_material,l1_q4_Transform,false)
        
// l2 lv1

    const l2_q1_Transform = new Transform()
    l2_q1_Transform.position = new Vector3(4,6.1,4)
    l2_q1_Transform.scale = new Vector3(8,8,8)
    l2_q1_Transform.rotation = Quaternion.Euler(90,270,0)
    loadPlane('floor_2',floor_2_material,l2_q1_Transform,false)

    const l2_q2_Transform = new Transform()
    l2_q2_Transform.position = new Vector3(12,6.1,4)
    l2_q2_Transform.scale = new Vector3(8,8,8)
    l2_q2_Transform.rotation = Quaternion.Euler(270,180,90)
    loadPlane('floor_2',floor_2_material,l2_q2_Transform,false)

    const l2_q3_Transform = new Transform()
    l2_q3_Transform.position = new Vector3(4,6.1,12)
    l2_q3_Transform.scale = new Vector3(8,8,8)
    l2_q3_Transform.rotation = Quaternion.Euler(270,0,90)
    loadPlane('floor_2',floor_2_material,l2_q3_Transform,false)

    const l2_q4_Transform = new Transform()
    l2_q4_Transform.position = new Vector3(12,6.1,12)
    l2_q4_Transform.scale = new Vector3(8,8,8)
    l2_q4_Transform.rotation = Quaternion.Euler(90,90,0)
    loadPlane('floor_2',floor_2_material,l2_q4_Transform,false)

//l3 lv1

    const l3_q1_Transform = new Transform()
    l3_q1_Transform.position = new Vector3(4,6.2,4)
    l3_q1_Transform.scale = new Vector3(8,8,8)
    l3_q1_Transform.rotation = Quaternion.Euler(90,270,0)
    loadPlane('floor_3',floor_3_material,l3_q1_Transform,false)

    const l3_q2_Transform = new Transform()
    l3_q2_Transform.position = new Vector3(12,6.2,4)
    l3_q2_Transform.scale = new Vector3(8,8,8)
    l3_q2_Transform.rotation = Quaternion.Euler(270,180,90)
    loadPlane('floor_3',floor_3_material,l3_q2_Transform,false)

    const l3_q3_Transform = new Transform()
    l3_q3_Transform.position = new Vector3(4,6.2,12)
    l3_q3_Transform.scale = new Vector3(8,8,8)
    l3_q3_Transform.rotation = Quaternion.Euler(270,0,90)
    loadPlane('floor_3',floor_3_material,l3_q3_Transform,false)

    const l3_q4_Transform = new Transform()
    l3_q4_Transform.position = new Vector3(12,6.2,12)
    l3_q4_Transform.scale = new Vector3(8,8,8)
    l3_q4_Transform.rotation = Quaternion.Euler(90,90,0)
    loadPlane('floor_3',floor_3_material,l3_q4_Transform,false)



//l4
    const l4_q1_Transform = new Transform()
    l4_q1_Transform.position = new Vector3(4,6.3,4)
    l4_q1_Transform.scale = new Vector3(8,8,8)
    l4_q1_Transform.rotation = Quaternion.Euler(90,270,0)
    loadPlane('floor_4',floor_4_material,l4_q1_Transform,false)

    const l4_q2_Transform = new Transform()
    l4_q2_Transform.position = new Vector3(12,6.3,4)
    l4_q2_Transform.scale = new Vector3(8,8,8)
    l4_q2_Transform.rotation = Quaternion.Euler(270,180,90)
    loadPlane('floor_4',floor_4_material,l4_q2_Transform,false)

    const l4_q3_Transform = new Transform()
    l4_q3_Transform.position = new Vector3(4,6.3,12)
    l4_q3_Transform.scale = new Vector3(8,8,8)
    l4_q3_Transform.rotation = Quaternion.Euler(270,0,90)
    loadPlane('floor_4',floor_4_material,l4_q3_Transform,false)

    const l4_q4_Transform = new Transform()
    l4_q4_Transform.position = new Vector3(12,6.3,12)
    l4_q4_Transform.scale = new Vector3(8,8,8)
    l4_q4_Transform.rotation = Quaternion.Euler(90,90,0)
    loadPlane('floor_4',floor_4_material,l4_q4_Transform,false)

}