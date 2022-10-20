/// --- Set up a system ---
import {NftComponent, NftSign} from './modules/nft-sign'
import {nftAsyncTask} from './modules/matic-nft'
import {alice} from './modules/npc-alice'
import {loadStaticScene, Spin} from './modules/scene'

//NOTE: alice npc is loaded on import 

//load static scene models
loadStaticScene()

//preform a fetch to get the Polygon nft data and render on screen.
nftAsyncTask()


class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Spin)

  update(dt: number) {
    // iterate over the entities of the group
    for (const entity of this.group.entities) {

      //Only spin if spinning == true
      if(entity.getComponent(Spin).spinning){

        // get the Transform component of the entity
        const transform = entity.getComponent(Transform)

        // mutate the rotation
        transform.rotate(Vector3.Up(), dt * entity.getComponent(Spin).speed)
      }
    }
  }
}

// // Add a new instance of the system to the engine
engine.addSystem(new RotatorSystem())
