const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect;

describe("POST CREATE USER", function(){
    it("Sukses Create Akun", async function(){
        const response = await request
        .post("/api/users")
        .send({name: "Ahmad Nurhadi",
            job: "QA"});
        // console.log(response)

        expect(response.body.name).to.eql('Ahmad Nurhadi')
        expect(response.body.job).to.eql('QA')
    
    })
})
describe("POST LOGIN BERHASIL", function(){
    it("Sukses Login", async function(){
        const response = await request
        .post("/api/login")
        .send({email: "eve.holt@reqres.in",
            password: "*curutgundul123"});
        // console.log(response)

        expect(response.body.token).to.exist;
    
    })
})

describe("PUT USER BERHASIL", function(){
    it("Berhasil Update", async function(){
        const response = await request
        .put("/api/users/2")
        .send({name: "Brodi",
            job: "Pengamen"});
        // console.log(response)

        expect(response.body.name).to.eql('Brodi')
        expect(response.body.job).to.eql('Pengamen')
        expect(response.body.updatedAt).to.exist;
    })
})

describe("Deleted USER BERHASIL", function(){
    it("Berhasil Update", async function(){
        const response = await request
        .del("/api/users/2")
        .send({name: "Brodi",
            job: "Pengamen"});
        // console.log(response)

        expect(response.statusCode).to.eql(204)
    })
})

describe("POST Registrasi USER BERHASIL", function(){
    it("Berhasil Update", async function(){
        const response = await request
        .post("/api/users/2")
        .send({email: "michael.lawson@reqres.in",
            password: "Pengamen"});
        // console.log(response)

        expect(response.body.email).to.eql('michael.lawson@reqres.in')
        expect(response.body.password).to.eql('Pengamen')

    })
})

