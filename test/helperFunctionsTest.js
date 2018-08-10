const assert = require('assert')
const helperFunctions = require('../helperFunctions')

describe('Testing title case function', function(){

    it('Should be in the form of Title Case', function(){
        let songTitle = helperFunctions.convertToTitleCase('delicate')
        assert.equal('Delicate', songTitle)
    })

    it('Should return null when an empty string is passed', function(){
        let songTitle = helperFunctions.convertToTitleCase('')
        assert.equal(null, songTitle)
    })

    it('Should return null when passed null', function(){
        let songTitle = helperFunctions.convertToTitleCase(null)
        assert.equal(null, songTitle)
    })

})

describe('Testing getArtistAndTitle', function(){

    it('Should return null if passed nulls', function(){
        let artistAndTitle = helperFunctions.getArtistAndTitle(null, null)
        assert.equal(null, artistAndTitle)
        assert.equal(null, artistAndTitle)
    })
})
