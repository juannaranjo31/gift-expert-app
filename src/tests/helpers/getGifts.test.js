import { getGifts } from "../../helpers/getGifts";

describe('Pruebas sobre helper getGifs Fetch', () => {
   
    test('Debe traer 10 elementos', async() => {
       
        const gifs = await getGifts('One Punch');

        expect( gifs.length ).toBe( 10 );
    });
    
    test('Debe regresar un arreglo vacío si no recibe una categoría', async() => {
        
        const gifs = await getGifts('');

        expect( gifs.length ).toBe( 0 );

    });
    
});
