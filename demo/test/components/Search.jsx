
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Search from '../../js/components/Search.jsx';

describe('Search', () => {
    const placeholder = 'placeholder';
    const search = shallow(
        <Search
            placeholder={placeholder}
        />
    );

    it('should have a input.search-input', () => {
        expect(search.find('input.search-input')).to.have.length(1);
    });

    it('should have the placeholder given', () => {
        expect(search.find('input.search-input').prop('placeholder'))
            .to.equal(placeholder);
    });

    it('should call change function at input', function (done) {
        const TEXT = 'abcd';
        const change = (text) => {
            expect(text).to.equal(TEXT);
            done();
        };
        const wrapper = mount(
            <Search
                change={change}
            />
        );

        const input = wrapper.find('input');
        input.get(0).value = TEXT;

        input.simulate('change');
    });
});

