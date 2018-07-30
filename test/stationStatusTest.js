const stations = require('../config/stations')
const axios = require('axios')
const assert = require('assert')


//Functioning test for 1 station
describe('Testing Station 0 Status', function () {
    let statusCodes = []
    beforeEach(function () {
        return axios.get(stations[0].URL, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" } })
            .then((res) => {

                statusCodes.push(res.status)

                console.log("Testing station: " + stations[0].Name)
            })
    })

    it('Should return 200 when valid', function () {
        assert.equal(statusCodes[0], 200)
    })
})

describe('Testing Station 1 Status', function () {
    let statusCodes = []
    beforeEach(function () {
        return axios.get(stations[1].URL, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" } })
            .then((res) => {

                statusCodes.push(res.status)

                console.log("Testing station: " + stations[1].Name)
            })
    })

    it('Should return 200 when valid', function () {
        assert.equal(statusCodes[0], 200)
    })
})

describe('Testing Station 2 Status', function () {
    let statusCodes = []
    beforeEach(function () {
        return axios.get(stations[2].URL, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" } })
            .then((res) => {

                statusCodes.push(res.status)

                console.log("Testing station: " + stations[2].Name)
            })
    })

    it('Should return 200 when valid', function () {
        assert.equal(statusCodes[0], 200)
    })
})

describe('Testing Station 3 Status', function () {
    let statusCodes = []
    beforeEach(function () {
        return axios.get(stations[3].URL, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" } })
            .then((res) => {

                statusCodes.push(res.status)

                console.log("Testing station: " + stations[3].Name)
            })
    })

    it('Should return 200 when valid', function () {
        assert.equal(statusCodes[0], 200)
    })
})

describe('Testing Station 4 Status', function () {
    let statusCodes = []
    beforeEach(function () {
        return axios.get(stations[4].URL, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" } })
            .then((res) => {

                statusCodes.push(res.status)

                console.log("Testing station: " + stations[4].Name)
            })
    })

    it('Should return 200 when valid', function () {
        assert.equal(statusCodes[0], 200)
    })
})

describe('Testing Station 5 Status', function () {
    let statusCodes = []
    beforeEach(function () {
        return axios.get(stations[5].URL, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" } })
            .then((res) => {

                statusCodes.push(res.status)

                console.log("Testing station: " + stations[5].Name)
            })
    })

    it('Should return 200 when valid', function () {
        assert.equal(statusCodes[0], 200)
    })
})

describe('Testing Station 6 Status', function () {
    let statusCodes = []
    beforeEach(function () {
        return axios.get(stations[6].URL, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" } })
            .then((res) => {

                statusCodes.push(res.status)

                console.log("Testing station: " + stations[6].Name)
            })
    })

    it('Should return 200 when valid', function () {
        assert.equal(statusCodes[0], 200)
    })
})

describe('Testing Station 7 Status', function () {
    let statusCodes = []
    beforeEach(function () {
        return axios.get(stations[7].URL, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" } })
            .then((res) => {

                statusCodes.push(res.status)

                console.log("Testing station: " + stations[7].Name)
            })
    })

    it('Should return 200 when valid', function () {
        assert.equal(statusCodes[0], 200)
    })
})

const statusCodes = []
