var myMath = require('../index')
let chai = require('chai');
const expect = require('chai').expect;
var should = require('chai').should();
let server = require('../app');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Math Expect Lib Test', function () {
    it('1. Add', function (done) {
        expect(myMath.add(2, 3)).to.equal(5);
        done()
    })

    it('2. Subtract', function (done) {
        expect(myMath.subtract(12, 3)).to.equal(9);
        expect(myMath.subtract(12, 3)).to.deep.equal(9);
        done()
    })

    it('3. returnArray', function (done) {
        expect(myMath.returnArray()).to.be.an('array').that.includes(4);
        expect(myMath.returnArray()).to.be.an('array').that.does.not.include(5);
        expect(myMath.returnArray()).to.have.lengthOf(3);
        done()
    })

    it('4. returnArray length', function (done) {
        expect(myMath.returnArray()).to.have.lengthOf(3);
        done()
    })

    it('5. md5', function (done) {
        myMath.myMd5('sangram', function (err, result) {
            expect(result)
                .to.be.a('string')
                .that.matches(/^[a-f0-9]{32}$/)
                .and.equal('179ffaa9f8677595956d98a29905c077');
        })
        done()
    })

    it('6. class', function (done) {
        var student = new myMath.Student()
        expect(student).to.be.an.instanceof(myMath.Student);
        done()
    })

    it('6. welcome', (done) => {
        chai.request(server)
            .get('/welcome')
            .end((err, res) => {
                expect(res.body.data).to.have.property('name').eql('sangram');
                expect(res.statusCode).to.equal(200);
                expect(res).to.have.nested.property('body.data.name');
                expect(res).to.nested.include({ 'body.data.name': 'sangram' });
                expect(res.body).to.have.own.property('data');
                expect(res.body.data).to.have.any.keys('name', 'age');
                expect(res.body).to.have.all.keys('data', 'msg');
                expect(res.body).to.not.have.any.keys('error', 'message');
                expect(res.body).to.have.ownPropertyDescriptor('data');
                done();
            });
    });

})

describe('Math Should Lib Test', function () {
    it('1. Add', function (done) {
        myMath.add(2, 3).should.equal(5)
        done()
    })

    it('2. Subtract', function (done) {
        myMath.subtract(12, 3).should.equal(9)
        done()
    })

    it('3. returnArray', function (done) {
        myMath.returnArray().should.be.an('array').that.includes(9);
        done()
    })

    it('4. returnArray length', function (done) {
        myMath.returnArray().should.have.lengthOf(3);
        done()
    })

    it('5. md5', function (done) {
        myMath.myMd5('sangram', function (err, result) {
            result.should.be.a('string').that.matches(/^[a-f0-9]{32}$/).equal('179ffaa9f8677595956d98a29905c077')
        })
        done()
    })
    it('6. welcome', (done) => {
        chai.request(server)
            .get('/welcome')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                res.body.data.should.have.property('name').eql('sangram');;
                done();
            });
    });
})