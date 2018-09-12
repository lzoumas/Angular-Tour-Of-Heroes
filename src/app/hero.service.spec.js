"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var hero_service_1 = require("./hero.service");
describe('HeroService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(hero_service_1.HeroService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=hero.service.spec.js.map