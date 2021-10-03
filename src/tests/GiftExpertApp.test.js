import React from 'react'
import { shallow } from "enzyme";
import GiftExpertApp from '../GiftExpertApp';

describe('Pruebas sobre < GiftExpertApp />', () => {

    test('Debe reenderizarse correctamente', () => {

        const wrapper = shallow(<GiftExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {

        const categories = ['Dragon Ball', 'Naruto'];
        const wrapper = shallow(<GiftExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GiftGrid').length).toBe(categories.length);

    });

});
