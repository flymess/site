/**
 * Created by tao on 2016/11/14.
 */
suite('"About" Page Tests', function () {
	test('page should contain link to contact page', function () {
		chai.assert($('a[href="/contact"]').length);
	})
})