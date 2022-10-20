import {NftSign} from "./nft-sign"
  
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '0ebea08d-6b39-48b8-acc9-194035ecc802'
    }
  };
  
// type 

  let data:any
 export async function nftAsyncTask() {
    try {
      
         data = await fetch('https://api.nftport.xyz/v0/accounts/0x6A35d29D8F63E4D8A8E5418Be9342A48c4C8eF07?chain=polygon&contract_address=0xf6d8e606c862143556b342149a7fe0558c220375', options)
         .then(data => data.json())
        log('---nft')
        log(data)
         for (let i = 0; i < data.nfts.length; i++){
          //Only send the first nft 
          if (i == 0) {
            new NftSign(data.nfts[0].file_url,data.nfts[i].name,i)
          }
         }
    } catch (e) {
    }
  
  }
  
//   myAsyncTask()
  
  
  