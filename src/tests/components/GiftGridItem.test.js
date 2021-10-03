import React from 'react'
import { shallow } from "enzyme";
import {GiftGridItem} from '../../components/GiftGridItem';

describe('Tests sobre el componenete <GiftGridItem />', () => {

    const title = 'un titulo';
    const url = 'https://localhost/algo.jpg';
    let wrapper = shallow(<GiftGridItem title={title} url={url} />);

    beforeEach( () => {
        wrapper = shallow(<GiftGridItem title={title} url={url} />);
    });

    //Snapshot correcto del componente
    test('El componente debe reenderizarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el titulo del Gif', () => {
        const p = wrapper.find('p');

        expect ( p.text().trim() ).toBe( title );
    });

    test('Debe tener props src igual a url y alt igual a titulo', () => {
        const img = wrapper.find('img');
        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title );
    });

    test('Debe tener una animacion fadeIn', () => {
        const div = wrapper.find('div');
        expect( div.prop('className').includes( 'animate__fadeIn' ) ).toBe( true );
    })
    
});
