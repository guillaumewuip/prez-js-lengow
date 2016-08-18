
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Button from '../js/components/Button.jsx';

describe('Button', () => {
    it('should should have a <button>', () => {
        const wrapper = shallow(
            <Button />
        );
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('should should contains Show more', () => {
        const wrapper = shallow(
            <Button />
        );
        expect(wrapper.text()).to.equal('Show more');
    });

    it('should call callback on click', function (done) {
        const wrapper = shallow(
            <Button click={done} />
        );

        wrapper.simulate('click');
    });
});
