
import { Dash_AnimationQueue, Dash_Ease } from 'dcldash'


export function elevatorUpDown(ent:Entity,upStart:number,upEnd:number){

    Dash_AnimationQueue.add({
        duration: 2,
        data: { someval: 'foo' }, // optionally pass along some data that is accessible every frame
        onFrame: (progress, data) => {
            const transform = ent.getComponent(Transform)
            const easeValue = Scalar.Lerp(upStart, upEnd, Dash_Ease.easeInCubic(progress))
            transform.position.y = easeValue
        },
        onComplete: () => {
            log('Animation Done!')
        }
    })
}
