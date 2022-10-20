import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import resources from '../resources'
import { AliceDialog } from './dialogData'

export const alice = new NPC(
    {
      position: new Vector3(13, 8, 13),
      rotation: Quaternion.Euler(0, 180, 0)
    },
    resources.models.robots.alice,
    () => {
      // animations
      alice.playAnimation('Hello', true, 2)
  
      const dummyent = new Entity()
      dummyent.addComponent(
        new NPCDelay(2, () => {
          alice.playAnimation('Talk')
        })
      )
      engine.addEntity(dummyent)
  
      // sound
      alice.addComponentOrReplace(new AudioSource(resources.sounds.alice))
      alice.getComponent(AudioSource).playOnce()
  
      // dialog UI
      alice.talk(AliceDialog)
    },
    {
      faceUser: true,
      portrait: {
        path: 'images/portraits/alice.png',
        height: 256,
        width: 256,
        section: {
          sourceHeight: 512,
          sourceWidth: 512
        }
      },
      onWalkAway: () => {
        alice.playAnimation('Goodbye', true, 2)
      }
    }
  )
  