export default {
  sounds: {
    alice: new AudioClip('sounds/alice.mp3'),
    bob: new AudioClip('sounds/bob.mp3'),
    charlie: new AudioClip('sounds/charlie.mp3')
  },
  models: {
    standard: {
      baseScene: new GLTFShape('models/standard/baseScene.glb'),
      cyberFloor: new GLTFShape('models/standard/cyberFloor.glb')
    },
    robots: {
      alice: 'models/robots/alice.glb',
      bob: 'models/robots/bob.glb',
      charlie: 'models/robots/charlie.glb',
      rings: new GLTFShape('models/robots/rings.glb')
    }
  },
  textures: {
    blank: new Texture('images/ui/blank.png'),
    buttonE: new Texture('images/ui/buttonE.png'),
    buttonF: new Texture('images/ui/buttonF.png'),
    leftClickIcon: new Texture('images/ui/leftClickIcon.png'),
    textPanel: new Texture('images/ui/textPanel.png'),
    cyberCircle: new Texture('images/ui/cybercircle02.png'),
    polyGraph: new Texture('images/ui/polyGraphICON.png'),
    floor_1: new Texture('images/floor_1.png'),
    floor_2: new Texture('images/floor_2.png'),
    floor_3: new Texture('images/floor_3.png'),
    floor_4: new Texture('images/floor_4.png'),
    floor_1_op: new Texture('images/floor_1_op.png')

  }
}
