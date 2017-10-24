
import { Supported, Open, Launch } from '../src/launcher';



it('URL should be supported', done => {

    Launch('http://www.google.com').then(() => {
        done();
    }, (error) => {
        assert.fail(error);
        done();
    });

});


