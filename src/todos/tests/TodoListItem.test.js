import { expect } from 'chai';
import { getBorderStyleForDate } from '../TodoListItem';

describe('getBorderStyleForDate', () => {
    it('returns none when the date is less than five days ago', () => {
        const today = new Date();
        const recentDate = new Date();
        recentDate.setDate(recentDate.getDate() - 3);
        const expected = 'none';
        const actual = getBorderStyleForDate(recentDate, today);
        expect(expected).to.equal(actual);
    });
    it('returns a border when the date is more than five days ago', () => {
        const today = new Date();
        const recentDate = new Date();
        recentDate.setDate(recentDate.getDate() - 6);
        const expected = '2px solid red';
        const actual = getBorderStyleForDate(recentDate, today);
        expect(expected).to.equal(actual);
    });
});