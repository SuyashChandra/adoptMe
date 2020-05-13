import { readFileSync } from 'fs';
import path from 'path';
import { act } from 'react-testing-library';

const breeds= [
    {name: "Bichon Frise"},
    {name: "Bolognese"},
    {name: "Coton de Tuleat"},
    {name: "Havanese"},
    {name: "Maltese"}
]

const doggos = JSON.parse(
    readFileSync(path.join(__dirname, 'res.json')).toString()
)

export const AMIMALS = ["dog","cat", "bird"];
export const _breds = breeds;
export const _dogs = doggos.animals;


const mock = {
    breeds: jest.fn(() => {
        return {
            then: callback => act(()=> callback({breeds}))
        }
    }),
    animals: jest.fn(()=> {
        return {
            then: callback => act(()=> callback(doggos))
        }
    })
}

export default mock;