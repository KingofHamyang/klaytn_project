const AdditionGame = artifacts.require('./AdditionGame.sol')
const fs = require('fs')

module.exports = function (deployer) {
    deployer.deploy(AdditionGame).then(()=>{
        if(AdditionGame._json){
            fs.writeFile('deployedABI', JSON.stringify(AdditionGame._json), (err)=>{
                if(err) throw err;
                console.log("ABI is writtend completely")
            })
            fs.writeFile('deployedAddress', JSON.stringify(AdditionGame.address), (err)=>{
                if(err) throw err;
                console.log("Address is writtend completely")
            })

        }



        
    })
}
