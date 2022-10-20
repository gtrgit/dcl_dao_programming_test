import { Dash_AnimationQueue, Dash_Ease } from 'dcldash'

// // const box = new Entity()
// // box.addComponent(new BoxShape())
// // box.addComponent(new Transform({
// //     position: new Vector3(8, 2, 8),
// //     scale: new Vector3(1,1,1)
// // }))
// // engine.addEntity(box)

// const startScale = 1
// const endScale = 2
// Dash_AnimationQueue.add({
//     duration: 2,
//     data: { someval: 'foo' }, // optionally pass along some data that is accessible every frame
//     onFrame: (progress, data) => {
//         const transform = box.getComponent(Transform)
//         const easeValue = Scalar.Lerp(startScale, endScale, Dash_Ease.easeOutBounce(progress))
//         transform.scale.setAll(easeValue)
//     },
//     onComplete: () => {
//         log('Animation Done!')
//     }
// })
