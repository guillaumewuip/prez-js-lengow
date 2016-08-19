
import { fromJS } from 'immutable';
import { expect } from 'chai';

import filter from '../../js/utils/filter';

const product = fromJS({
    title: 'toto tata titi',
    img:   'img/images_red.png',
    price: '1585 €',
});

describe('product filter', () => {
    it('should return true if search query is empty', () => {
        expect(filter('')(product)).to.equal(true);
    });
    it('should return true if title contains search query', () => {
        expect(filter('toto')(product)).to.equal(true);
    });
    it('should return true if price contains search query', () => {
        expect(filter('58')(product)).to.equal(true);
    });
    it('should return true if img contains search query', () => {
        expect(filter('red')(product)).to.equal(true);
    });
});
