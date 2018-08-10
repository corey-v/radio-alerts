const assert = require('assert')
const axios = require('axios')

const mongojs = require('mongojs')
const config = require('../config/config')

const db = mongojs(config.database, ['currentlyPlaying'])

//Test getting all currently playing songs
describe('Testing Database Get All Songs', function () {
    //let resData = []
    // beforeEach(async function(){
    //     await 
    // })
    it('Should be 95.3', async function () {
        
        const resData = await db.currentlyPlaying.find({Name: '95.3'} )
        //console.log(resData)
        assert.equal(resData, '95.3')
    })
    
})
