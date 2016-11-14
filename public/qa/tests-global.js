/**
 * Created by tao on 2016/11/14.
 */

	suite('Global Tests', function () {
		test('page has a valid title', function() {
			chai.assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
		});
	});

