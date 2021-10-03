import { useFetchGifts } from "../../hooks/useFetchGifts";
import { renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifts', () => {
    
    test('Debe retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifts( 'One Punch' ) );
        const { data, loading} = result.current;
        await waitForNextUpdate();
        expect( data ).toEqual( [] );
        expect( loading ).toBeTruthy();
    });

    test('Debe retornar un arreglo de imagenes y loading en false', async() => {
    
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifts( 'One Punch' ) );
        await waitForNextUpdate();
        const { data, loading} = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBeFalsy();
    });
    
    

});
