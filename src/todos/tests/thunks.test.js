import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';
import { loadTodos } from '../thunks';
import { loadTodosInProgress, loadTodosSuccess } from '../actions';

describe('The loadTodos thunk',() => {
    it('Dispatches the correct actions in the success scenario', async () => {
        const fakeDispatch = sinon.spy();

        const fakeTodos = [{ text: '1' }, { text: '2' }];
        fetchMock.get('http://localhost:8080/todos', fakeTodos);

        const expectedFirstAction = loadTodosInProgress();
        const expectedSecondAction = loadTodosSuccess(fakeTodos);

        await loadTodos()(fakeDispatch);

        expect(fakeDispatch.firstCall.args[0]).to.deep.equal(expectedFirstAction);
        expect(fakeDispatch.secondCall.args[0]).to.deep.equal(expectedSecondAction);

        fetchMock.reset();
    });
});