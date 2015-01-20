describe("Hello Provider test", function() {

    var provider;

    beforeEach(module('ngHello', function(helloProvider) {
        provider = helloProvider;
    }));

    it('tests the providers init function', inject(function() {
        expect(provider.hasOwnProperty('init')).toBeDefined();
    }));

    it('tests the providers $get  function', inject(function() {
        expect(provider.$get()).toEqual({});
    }));
});