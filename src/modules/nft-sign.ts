
@Component("nftComponent")
export class NftComponent {
  image: string
  name: string
  constructor(image: string, name: string) {
    this.image = image
    this.name = name
  }
}

export class NftSign extends Entity{

    private plane = new PlaneShape()
    private material = new Material()
    private transform = new Transform()
    private textTransform = new Transform()
    private textEnt = new Entity()
  
    constructor(imageUrl:string, nftName:string, itterator:number ){
      super()
      const texture = new Texture(imageUrl)
      this.material.albedoTexture = texture
      // this.material.emissiveColor = Color3.White()
      // this.material.alphaTexture = texture
      this.material.emissiveTexture =  texture
      this.material.emissiveIntensity = 10
      this.transform.position = new Vector3(12,8,3)
      this.transform.rotation = Quaternion.Euler(180,135,0)
      this.addComponent(new NftComponent(imageUrl, nftName))
      this.addComponent(this.transform)
      this.addComponent(this.plane)
      this.addComponent(this.material)
      engine.addEntity(this)

      
      const myText = new TextShape(nftName)
      myText.fontSize = 3
      this.textTransform.position = new Vector3(0,-0.8,0)
      this.textTransform.rotation = Quaternion.Euler(180,0,0)
      this.textEnt.addComponent(myText)
      this.textEnt.addComponent(this.textTransform)
      this.textEnt.setParent(this)

    }
  }