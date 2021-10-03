import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from "enzyme";
import { useFetchGifts } from '../../hooks/useFetchGifts';
import { GiftGrid } from "../../components/GiftGrid";
jest.mock('../../hooks/useFetchGifts');

describe('Pruebas en <GiftGrid />', () => {
    const category = 'Dragon ball';

    test('Debe reenderizarse correctamente', () => {
        useFetchGifts.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GiftGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imagenes con useFetchGifts', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/algo.jpg',
                title: 'cualquier cosa'
            },

            {
                id: '123',
                url: 'https://localhost/algo.jpg',
                title: 'cualquier cosa'
            }

        ];

        useFetchGifts.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GiftGrid category={category} />);
        
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GiftGridItem').length).toBe(gifs.length);

    });


});
