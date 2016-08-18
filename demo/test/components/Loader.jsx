
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Loader from '../../js/components/Loader.jsx';

describe('Loader', () => {
    const text = 'Loading ...';
    const loader = shallow(
        <Loader text={text} />
    );

    it('should have a root .ajax-loading', () => {
        expect(loader.is('.ajax-loading')).to.equal(true);
    });

    it('should have two bounce', () => {
        expect(loader.find('.double-bounce1')).to.have.length(1);
        expect(loader.find('.double-bounce2')).to.have.length(1);
    });

    it('should have a title', () => {
        const title = loader.find('.title-thin');
        expect(title).to.have.length(1);
        expect(title.text()).to.equal(text);
    });
});
