import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('the getCompletedTodos selector', () => {
    it('Returns on completed todos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        },{
            text: 'Say Goodbye',
            isCompleted: false,
        },{
            text: 'Fall',
            isCompleted: true,
        },{
            text: 'Climb',
            isCompleted: false,
        }];
        const expected = fakeTodos.filter(todo => todo.isCompleted);
        const actual = getCompletedTodos.resultFunc(fakeTodos);
        expect(expected).to.deep.equal(actual);
    });
});