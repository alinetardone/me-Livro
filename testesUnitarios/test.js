import fetch from "node-fetch";
import chai from 'chai';
const expect = chai.expect;


describe('Tests api', function () {


    it('teste api login ', async () => {
        let result = await fetch('http://localhost:8083/client/login', {
            method: "POST",
            //mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                usuario: 'testUserName',
                senha: 'testPassword'
            })
        }).then(
            response => response.json()
        ).then(function (data) {
            console.log(data);
            if (data.length == 0) {
                alert("O login não pode ser realizado, verifique o seu usuario e senha");
                return;
            }
            else {
                console.log(data[0].id);
                window.location = "Layout.html?client=" + data[0].id;
            }
        })
        expect(result).to.be('object')
        expect(result.status).to.be(200)
    })

    it('teste api cadastro de usuario ', async () => {
        let result = await fetch('http://localhost:8083/client/checkUsuario', {
            method: "POST",
            //mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                usuario: 'testUserName',
                nome: 'testUser',
                senha: 'testPassword'
            })
        }).then(
            response => response.json()
        ).then(function (data) {
            console.log(data);
            if (data.length != 0) {
                alert("Esse usuario ja esta em uso");
                return;
            }
        })

        expect(result).to.be('object')
        expect(result.status).to.be(200)
    })
})
