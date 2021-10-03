import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas sobre <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe reenderizatse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });


    test('NO debe postear la información con submit', () => {
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();
    });


    test('Debe llamar a setCategories y limpiar la caja de texto', () => {

        const value = 'One Punch';

        //Simular inputChange
        wrapper.find('input').simulate('change', { target: {value} });
        
        //Simular submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( wrapper.find('input').prop('value') ).toBe( '' );
    });

});
